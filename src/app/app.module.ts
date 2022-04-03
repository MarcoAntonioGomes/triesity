import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [BrowserModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
