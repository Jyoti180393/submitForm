import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'submit',
    component: SubmitFormComponent
  },
  {
    path: 'allusers',
    component: AllUsersComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  declarations: [HomeComponent, SubmitFormComponent, AllUsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {

  
 }
