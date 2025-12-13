import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurtidaWidgetComponent } from './components/curtida-widget/curtida-widget.component';
import { UniqueIdService } from './services/unique-id.service';
import { MolduraFotoComponent } from './components/moldura-foto/moldura-foto.component';
import { AlbumFotosComponent } from './components/album-fotos/album-fotos.component';
import { provideHttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurtidaWidgetComponent,
    MolduraFotoComponent,
    AlbumFotosComponent,
    AsyncPipe,
  ],
  providers: [UniqueIdService, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
