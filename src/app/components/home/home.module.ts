import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MenuModule } from '../menu/menu.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [MenuModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
