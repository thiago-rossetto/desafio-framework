import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albums = new Array<any>();

  constructor( 
    private service: JsonPlaceholderService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.getAlbums();
  }

  getAlbums() {
    this.service.getAlbum()
    .then( res => {
      this.albums = res;
      this.spinnerHide();
    })
    .catch( err => {
      this.spinnerHide();
    })
  }

  spinnerHide(){
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
