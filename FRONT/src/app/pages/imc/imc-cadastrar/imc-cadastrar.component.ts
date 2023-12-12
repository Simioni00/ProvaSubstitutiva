import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Aluno } from "../../../models/aluno.models";
import { Imc } from "../../../models/imc.models";

@Component({
  selector: "app-imc-cadastrar",
  templateUrl: "./imc-cadastrar.component.html",
  styleUrls: ["./imc-cadastrar.component.css"],
})
export class ImcCadastrarComponent {
  alunoID: number = 0;
  peso: number = 0;
  altura: number = 0;
  alunos: Aluno[] = [];
  
  constructor(private client: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.client.get<Aluno[]>("https://localhost:7099/Aluno").subscribe({
      next: (alunos) => {
        this.alunos = alunos;
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }

  cadastrar(): void {
    let imc = {
      alunoID: this.alunoID,
      peso: this.peso,
      altura: this.altura
    };
    console.log(imc)
    this.client.post<Imc>(`https://localhost:7099/imc/${this.alunoID}`,  imc).subscribe({
      next: (imc) => {
        console.log(imc)
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}