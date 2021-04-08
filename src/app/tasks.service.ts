import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

interface Task{
  title: string;
}

@Injectable()
export class TasksService {

  list: Array<Task> = [];

  constructor(private logger: LoggerService) { 
    this.logger.add("TasksService started");

  }


  getList(){
    return this.list;
  }
  add(title: string){
    this.list.push({title});
    this.logger.add("TasksService task '"+title+"' added");

  }
  remove(index: number){
    this.list.splice(index, 1);
  }

}