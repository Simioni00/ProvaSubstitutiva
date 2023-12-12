import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Aluno } from '../../../models/aluno.models';

@Component({
  selector: 'app-aluno-cadastrar',
  templateUrl: './aluno-cadastrar.component.html',
  styleUrls: ['./aluno-cadastrar.component.css']
})
export class AlunoCadastrarComponent implements OnInit {
  nome: string = '';
  nascimento: string = '';
  alunos: Aluno[] = [];
  mensagem: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .get<Aluno[]>("https://localhost:7099/aluno")
      .subscribe({
        next: (alunos) => {
          this.alunos = alunos;
        },
        error: (error) => {
          console.error("Erro ao buscar alunos:", error);
        },
      });
  }

  cadastrar(): void {
    const aluno: Aluno = {
      alunoID: 0,
      nome: this.nome,
      nascimento: this.nascimento
    };

    this.http
      .post<Aluno>("https://localhost:7099/aluno", aluno)
      .subscribe(
        (aluno) => {
          this.mensagem = "Aluno cadastrado com sucesso!";
        },
        (error) => {
          console.error("Erro ao cadastrar aluno:", error);
          this.mensagem = "Erro ao cadastrar aluno. Por favor, tente novamente.";
        }
      );
  }
}