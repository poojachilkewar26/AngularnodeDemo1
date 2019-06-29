import { Component, OnInit } from '@angular/core';
import { HttpModule, Http }    from '@angular/http';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  constructor(private http:Http) { }
   tasks : any ;
  ngOnInit() {
    
    this.http.get('http://localhost:3000/api/tasks').subscribe(data => {
    this.tasks = data;
  });
  }

}
