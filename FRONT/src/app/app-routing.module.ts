import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunoListarComponent } from "./pages/aluno/aluno-listar/aluno-listar.component";
import { AlunoCadastrarComponent } from "./pages/aluno/aluno-cadastrar/aluno-cadastrar.component";
import { ImcListarComponent } from "./pages/imc/imc-listar/imc-listar.component";
import { ImcCadastrarComponent } from "./pages/imc/imc-cadastrar/imc-cadastrar.component";
import { ImcAtualizarComponent } from "./pages/imc/imc-atualizar/imc-atualizar.component";


const routes: Routes = [
  {
    path: "",
    component: AlunoListarComponent,
  },
  {
    path:"pages/aluno/aluno-listar",
    component: AlunoListarComponent,
  },
  {
    path:"pages/aluno/aluno-cadastrar",
    component: AlunoCadastrarComponent,
  },
  {
    path:"pages/imc/imc-listar",
    component: ImcListarComponent,
  },
  {
    path:"pages/imc/imc-cadastrar",
    component: ImcCadastrarComponent,
  },
  {
    path:"pages/imc/imc-atualizar/:id",
    component: ImcAtualizarComponent,
  }
  
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
