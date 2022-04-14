import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { TriesityPurposeComponent } from './triesity-purpose.component';

@NgModule({
  imports: [SplitterModule, ButtonModule, CardModule],
  declarations: [TriesityPurposeComponent],
  exports: [TriesityPurposeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TriesityPurposeModule {}
