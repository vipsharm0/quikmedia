import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { QkCommonModule } from './shared/qk-common.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    QkCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
