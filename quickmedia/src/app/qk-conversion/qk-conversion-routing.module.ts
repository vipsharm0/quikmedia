import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QkConversionComponent } from './qk-conversion.component';
import { QkMprListComponent } from './qk.mpr-list/qk.mpr-list.component';

const routes: Routes = [
  {
    path: '',
    component:QkConversionComponent
  },
  {
    path: 'mprlist',
    component: QkMprListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QkConversionRoutingModule { }
