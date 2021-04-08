import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  constructor(public tasks: TasksService, private logger: LoggerService) { 
    this.logger.add("TasksComponent constructed");
  }

  ngOnInit() {
    this.logger.add("TasksComponent initialized");
  }


}