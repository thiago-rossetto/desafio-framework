import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  displayedColumns: string[] = ['Usuário', 'Tarefa', 'Status'];
  todos: any;
  
  constructor( 
    private service: JsonPlaceholderService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.getTodos();
  }

  getTodos() {
    this.service.getToDos()
    .then(res => { 
      this.todos = new MatTableDataSource(res);
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
