import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurtidaWidgetComponent } from './shared/components/curtida-widget/curtida-widget.component';
import { UniqueIdService } from './shared/services/unique-id/unique-id.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CurtidaWidgetComponent],
  providers: [UniqueIdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
