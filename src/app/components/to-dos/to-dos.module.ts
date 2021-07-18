import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDosComponent } from './to-dos.component';

import { TodosRoutingModule } from './to-dos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule
  ],
  declarations: [ToDosComponent]
})
export class ToDosModule { }
