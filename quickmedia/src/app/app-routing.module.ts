import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'conversion',
        loadChildren: () => import('./qk-conversion/qk-conversion.module').then(x => x.QkConversionModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./qk-orders/qk-orders.module').then(x => x.QkOrdersModule)
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'admin',
        loadChildren: () => import('./qk-admin/qk-admin.module').then(x => x.QkAdminModule)
      }
      ,
      {
        path: 'reports',
        loadChildren: () => import('./qk-reports/qk-reports.module').then(x => x.QkReportsModule)
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
