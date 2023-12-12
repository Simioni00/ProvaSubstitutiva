import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Aluno } from "../../../models/aluno.models";
import { Imc } from "../../../models/imc.models";

@Component({
  selector: "app-imc-atualizar",
  templateUrl: "./imc-atualizar.component.html",
  styleUrls: ["./imc-atualizar.component.css"],
})
export class ImcAtualizarComponent implements OnInit {
  imcID: number = 0;
  alunoID: number = 0;
  peso: number = 0;
  altura: number = 0;
  alunos: Aluno[] = [];

  constructor(
    private client: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parametros) => {
        let id = parametros['id'];
        
          this.client.get<Aluno[]>("https://localhost:7099/Aluno").subscribe({
            next: (alunos) => {
              this.alunos = alunos;
            },
            error: (erro) => {
              console.log(erro);
            },
          });

          this.client.get<Imc>(`https://localhost:7099/imc/${id}`).subscribe({
            next: (imc) => {
              this.imcID = imc.imcID!;
              this.alunoID = imc.alunoID;
              this.peso = imc.peso;
              this.altura = imc.altura;
            },
            error: (erro) => {
              console.log(erro);
            },
          });
        },
    });
  }

  alterar(): void {
    console.log("Antes da atualização - this.imcID:", this.imcID);
    if (!this.imcID) {
      console.log("ID do IMC não está definido.");
      return;
    }

    let imc: Imc = {
      imcID: this.imcID,
      alunoID: this.alunoID,
      peso: this.peso,
      altura: this.altura,
      valorImc: 0,
    };

    this.client.put<Imc>(`https://localhost:7099/imc/${this.imcID}`, imc).subscribe({
      next: (imc) => {
        console.log("IMC alterado com sucesso:", imc);
        this.router.navigate(["/pages/imc/imc-listar"]);
      },
      error: (erro) => {
        console.log("Erro ao alterar IMC:", erro);
      },
    });
  }
}
