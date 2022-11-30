import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QkConversionComponent } from './qk-conversion.component';
import { QkConversionExecuteComponent } from './qk.conversion.execute/qk.conversion.execute.component';
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
  {
    path: 'execute',
    component: QkConversionExecuteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QkConversionRoutingModule { }
