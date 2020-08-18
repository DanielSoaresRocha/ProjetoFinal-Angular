import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import {
  TarefaService,
  TarefaConcluidaDirective
} from './shared';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';

import { TarefasRoutingComponent } from './tarefas-routing.component'
import { TarefasRoutingModule } from './tarefas-routing.module'

@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective,
    TarefasRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TarefasRoutingModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
