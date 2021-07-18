import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albums = new Array<any>();
  teste = ""

  constructor( private service: JsonPlaceholderService ) { }

  ngOnInit() {
    this.getAlbums();

  }

  getAlbums() {
    this.service.getAlbum()
    .then( res => {
      this.albums = res;
    })
    .catch( err => {

    })
  }

}
