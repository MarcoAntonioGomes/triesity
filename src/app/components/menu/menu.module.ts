import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MenuModule {}
