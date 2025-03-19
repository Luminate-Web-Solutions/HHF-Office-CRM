import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientMgmtComponent } from './patient-mgmt/patient-mgmt.component';
import { CaseMgmtComponent } from './case-mgmt/case-mgmt.component';
import { FinancialAssistanceComponent } from './financial-assistance/financial-assistance.component';
import { FollowUpsComponent } from './follow-ups/follow-ups.component';
import { ReportsAnalyticsComponent } from './reports-analytics/reports-analytics.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientMgmtComponent,
    CaseMgmtComponent,
    FinancialAssistanceComponent,
    FollowUpsComponent,
    ReportsAnalyticsComponent,
    UserMgmtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
