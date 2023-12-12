// imc-listar.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imc } from '../../../models/imc.models';

@Component({
  selector: 'app-imc-listar',
  templateUrl: './imc-listar.component.html',
  styleUrls: ['./imc-listar.component.css']
})
export class ImcListarComponent implements OnInit {
  columnsTable: string[] = [
    'id',
    'nome',
    'nascimento',
    'altura',
    'peso',
    'valorImc',
    'classificar',
    'dataCriacao'
  ];

  imcs: Imc[] = [];

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.client.get<Imc[]>("https://localhost:7099/imc")
      .subscribe({
        next: (imcs) => {
          this.imcs = imcs;
        },
        error: (erro) => {
          console.log(erro);
        }
      });
  }
}
