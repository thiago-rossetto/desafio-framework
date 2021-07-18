import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments = new Array<any>();

  constructor( 
    private service: JsonPlaceholderService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.getComments();
  }

  getComments() {
    this.service.getComments()
    .then( res => {
      this.comments = res;
      this.spinnerHide();
    })
    .catch( err => {
      this.spinnerHide();
      this.toastr.error("Algo errrado aconteceu!");
    })
  }

  spinnerHide(){
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
