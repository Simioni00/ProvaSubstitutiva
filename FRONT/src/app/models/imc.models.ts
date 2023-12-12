import { Aluno } from "./aluno.models";

export interface Imc {
    valorImc: number;
    imcID?: number;
    altura: number;
    peso: number;
    alunoID: number;
    aluno?: Aluno; 
    classificar?: string;
    dataCriacao?: Date;
  }

  