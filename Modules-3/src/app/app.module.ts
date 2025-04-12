import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [AppComponent, UserComponent, HeaderComponent],
    imports: [BrowserModule, SharedModule, TasksModule],
    bootstrap: [AppComponent]
})
export class AppModule {}