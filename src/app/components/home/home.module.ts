import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PrincipalTestsComponent } from '../principal-tests/principal-tests.component';
import { TriesityPurposeComponent } from '../triesity-purpose/triesity-purpose.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [SplitterModule, ButtonModule, CardModule, RouterModule],
  declarations: [
    HomeComponent,
    PrincipalTestsComponent,
    TriesityPurposeComponent,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
