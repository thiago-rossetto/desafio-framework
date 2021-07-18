import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsComponent } from './comments.component';

import { CommentsRoutingModule } from './comments-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CommentsRoutingModule,
    SharedModule
  ],
  declarations: [CommentsComponent]
})
export class CommentsModule { }
