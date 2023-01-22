import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QkDelieveryComponent } from './qk.delievery/qk.delievery.component';
import { QkDelieverytrackerComponent } from './qk.delieverytracker/qk.delieverytracker.component';

const routes: Routes = [
  // {
    //   path: '',
    //   component:QkConversionComponent
    // },
    {
      path: 'delievery',
      component: QkDelieveryComponent
    },
    {
      path: 'track-delievery',
      component: QkDelieverytrackerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QkReportsRoutingModule { }
