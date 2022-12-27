import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QkOrderListComponent } from './qk-order-list/qk-order-list.component';

const routes: Routes = [
  {
    path: '',
    component:QkOrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QkOrdersRoutingModule { }
