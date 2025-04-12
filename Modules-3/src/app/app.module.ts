import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from "./tasks/tasks.component";
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [HeaderComponent, UserComponent, TasksComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}