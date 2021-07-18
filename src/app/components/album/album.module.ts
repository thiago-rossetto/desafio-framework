import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumComponent } from './album.component';

import { AlbumRoutingModule } from './album-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule
  ],
  declarations: [AlbumComponent]
})
export class AlbumModule { }
