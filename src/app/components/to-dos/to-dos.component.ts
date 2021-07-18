import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  displayedColumns: string[] = ['Usuário', 'Tarefa', 'Status'];
  todos: any;
  
  constructor( private service: JsonPlaceholderService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.service.getToDos()
    .then(res => { debugger
      this.todos = new MatTableDataSource(res);
    })
    .catch( err => {

    })
  }


}
