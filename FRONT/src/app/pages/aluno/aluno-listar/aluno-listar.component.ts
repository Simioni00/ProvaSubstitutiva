import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Aluno } from '../../../models/aluno.models';

@Component({
  selector: 'app-aluno-listar',
  templateUrl: './aluno-listar.component.html',
  styleUrl: './aluno-listar.component.css'
})
export class AlunoListarComponent {
  alunos : Aluno[] = []

  constructor(
    private client: HttpClient,){}

  ngOnInit() : void{
    console.log("O componente foi carregado!");

    this.client.get<Aluno[]>("https://localhost:7099/aluno")
      .subscribe({
        next: (alunos) => {
          this.alunos = alunos;
          console.table(alunos);
        },
        error: (erro) => {
          console.log(erro);
        }
      })
  }
}

