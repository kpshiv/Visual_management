import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentComponent } from './student/student.component';
import { TeachersComponent } from './teacher/teachers.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { PreventReloadDirective } from './directives/prevent-reload.directive';
import { ClassReportComponent } from './teacher/class-report/class-report.component';
import { StudentReportComponent } from './student/student-report/student-report.component';
import { ReportsComponent } from './reports/reports.component';
import { PaymentComponent } from './notices/payment/payment.component';
import { BillsComponent } from './notices/bills/bills.component';
import { StatisticsComponent } from './notices/statistics/statistics.component';
import { LogoComponent } from './common/header/logo/logo.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    StudentComponent,
    TeachersComponent,
    HeaderComponent,
    FooterComponent,
    PreventReloadDirective,
    ClassReportComponent,
    StudentReportComponent,
    ReportsComponent,
    PaymentComponent,
    BillsComponent,
    StatisticsComponent,
    LogoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
