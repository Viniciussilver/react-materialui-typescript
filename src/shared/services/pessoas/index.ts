import { Environment } from '../../environment';
import { api } from '../axios-config';


type TListagemPessoa = {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

type TPessoasComTotalCount = {
    data: TListagemPessoa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | Error> => { 

  try {
    const urlRelativa = `/pessoas?page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
    const { data, headers } = await api.get(urlRelativa);

    if(data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS)
      };
    }

    return new Error('Erro ao listar os registros.');

  } catch (error) {
    return new Error((error as { message: string}).message || 'Erro ao listar os registros.');
  }
};

const getById = async (id: number): Promise<TListagemPessoa | Error> => { 
  try {
    const { data } = await api.get(`/pessoas/${id}`);
    
    if(data) {
      return data;
    }
    
    return new Error('Erro ao consultar o registro.');
    
  } catch (error) {
    return new Error((error as { message: string}).message || 'Erro ao consultar o registro.');
  }

};

const create = async (dados: Omit<TListagemPessoa, 'id'>): Promise<number | Error> => { 

  try {
    const { data } = await api.post<TListagemPessoa>('/pessoas', dados);
    
    if(data) {
      return data.id;
    }
    
    return new Error('Erro ao criar o registro.');
    
  } catch (error) {
    return new Error((error as { message: string}).message || 'Erro ao criar o registro.');
  }
};

const updateById = async (id: number, dados: TListagemPessoa): Promise<void | Error> => { 

  try {
    await api.put(`/pessoas/${id}`, dados);
  } catch (error) {
    return new Error((error as { message: string}).message || 'Erro ao atualizar o registro.');
  }


};

const deleteById = async (id: number): Promise<void | Error> => { 

  try {
    await api.delete(`/pessoas/${id}`);
  } catch (error) {
    return new Error((error as { message: string}).message || 'Erro ao deletar o registro.');
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};