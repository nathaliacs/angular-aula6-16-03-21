import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logger: LoggerService) { 
    this.logger.add("HomeComponent constructed");
  }

  ngOnInit() {
    this.logger.add("HomeComponent initialized");
  }

}