import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [TasksComponent, NewTaskComponent, TaskComponent],
    exports: [TasksComponent],
    imports:[SharedModule, FormsModule, CommonModule]
})
export class TasksModule { }