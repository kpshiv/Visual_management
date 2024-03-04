import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeachersComponent } from './teacher/teachers.component';
import { ClassReportComponent } from './teacher/class-report/class-report.component';
import { StudentComponent } from './student/student.component';
import { StudentReportComponent } from './student/student-report/student-report.component';
import { PaymentComponent } from './notices/payment/payment.component';
import { StatisticsComponent } from './notices/statistics/statistics.component';
import { BillsComponent } from './notices/bills/bills.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  { 
    path: 'teachers', 
    component: TeachersComponent
  },
  { 
    path: 'class-report', 
    component: ClassReportComponent
  },
  { 
    path: 'students', 
    component:  StudentComponent
  },

  { 
    path: 'student-reports', 
    component: StudentReportComponent
  },
  { 
    path: 'payment-gate', 
    component: PaymentComponent
  },
  { 
    path: 'statistics', 
    component:  StatisticsComponent
  },{ 
    path: 'bills', 
    component:    BillsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
