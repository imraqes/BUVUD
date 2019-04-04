import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [{
  path: '',
  component : DashboardComponent
},{
  path: '**',
  component : DashboardComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
