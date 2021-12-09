import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './component/student-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/student',
    pathMatch: 'full'
  },
  {
    path: 'student',
    component: StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
