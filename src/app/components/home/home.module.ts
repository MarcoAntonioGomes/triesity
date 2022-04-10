import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { MenuModule } from '../menu/menu.module';
import { TriesityPurposeComponent } from '../triesity-purpose/triesity-purpose.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [MenuModule, SplitterModule, ButtonModule],
  declarations: [HomeComponent, TriesityPurposeComponent],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
