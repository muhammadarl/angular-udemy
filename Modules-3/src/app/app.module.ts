import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from "./tasks/tasks.component";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, UserComponent, HeaderComponent, TasksComponent, NewTaskComponent, TaskComponent],
    imports: [BrowserModule, FormsModule, SharedModule],
    bootstrap: [AppComponent]
})
export class AppModule {}