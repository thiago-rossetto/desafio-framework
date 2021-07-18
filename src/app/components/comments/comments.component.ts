import { Component, OnInit } from '@angular/core';

import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments = new Array<any>();

  constructor( private service: JsonPlaceholderService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.service.getComments()
    .then( res => {
      debugger
      this.comments = res;
    })
    .catch( err => {
      debugger
    })
  }

}
