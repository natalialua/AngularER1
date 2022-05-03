import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { JogadorComponent } from './views/login/jogador.component';


const routes: Routes = [

 {path: "contato",component: ContatoComponent},
 {path: '', component: HomeComponent},
{path: "jogador",component: JogadorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
