import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { PrincipalTestsComponent } from './principal-tests.component';

@NgModule({
  imports: [SplitterModule, ButtonModule, CardModule],
  declarations: [PrincipalTestsComponent],
  exports: [PrincipalTestsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalTestModule {}
