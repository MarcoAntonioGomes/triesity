import { HomeComponent } from './home.component';
import { PrincipalTestModule } from '../principal-tests/principal-tests.module';
import { TriesityPurposeModule } from '../triesity-purpose/triesity-purpose.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [PrincipalTestModule, TriesityPurposeModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
