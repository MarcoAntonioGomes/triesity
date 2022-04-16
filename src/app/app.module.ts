import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuModule } from './components/menu/menu.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { StartNowComponent } from './components/start-now/start-now.component';
import { SplitterModule } from 'primeng/splitter';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestInfoComponent } from './components/test-info/test-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'start-now', component: StartNowComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StartNowComponent,
    TestInfoComponent,
  ],
  imports: [
    BrowserModule,
    MenuModule,
    RouterModule.forRoot(routes),
    HomeModule,
    SplitterModule,
    FieldsetModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
