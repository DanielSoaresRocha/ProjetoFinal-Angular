import { Routes, RouterModule } from '@angular/router'

import { ListarTarefasComponent } from './listar'
import { CadastrarTarefaComponent } from './cadastrar'
import { EditarTarefasComponent } from './editar'

import { TarefasRoutingComponent } from './tarefas-routing.component'
import { NgModule } from '@angular/core'

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        component: TarefasRoutingComponent,
        children: [
            {
                path: '',
                component: ListarTarefasComponent
            },
            {
                path: 'cadastrar',
                component: CadastrarTarefaComponent
            },
            {
                path: 'editar/:id',
                component: EditarTarefasComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(TarefaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TarefasRoutingModule { }