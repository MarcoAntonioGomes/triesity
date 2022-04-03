import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: MenuRoutingModule }]),
  ],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
