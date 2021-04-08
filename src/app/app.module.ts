import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { LogComponent } from "./log/log.component";
import { RouterModule } from "@angular/router";
import { TasksComponent } from './tasks/tasks.component';
import { TimerService } from './timer.service';
import { TasksService } from './tasks.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'log', component: LogComponent }
    ])

    ],

  declarations: [
    AppComponent,
    HelloComponent, 
    HomeComponent, 
    LogComponent, TasksComponent
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, TasksService, LoggerService]
})
export class AppModule {}
