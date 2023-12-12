import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlunoListarComponent } from './pages/aluno/aluno-listar/aluno-listar.component';
import { AlunoCadastrarComponent } from './pages/aluno/aluno-cadastrar/aluno-cadastrar.component';
import { ImcListarComponent } from './pages/imc/imc-listar/imc-listar.component';
import { ImcCadastrarComponent } from './pages/imc/imc-cadastrar/imc-cadastrar.component';
import { ImcAtualizarComponent } from './pages/imc/imc-atualizar/imc-atualizar.component';

@NgModule({
    declarations: [
      AppComponent,
      AlunoListarComponent,
      AlunoCadastrarComponent,
      ImcListarComponent,
      ImcCadastrarComponent,
      ImcAtualizarComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
