import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurtidaWidgetComponent } from './shared/components/curtida-widget/curtida-widget.component';
import { UniqueIdService } from './shared/services/unique-id/unique-id.service';
import { MolduraFotoComponent } from './shared/components/moldura-foto/moldura-foto.component';
import { AlbumFotosComponent } from './shared/components/album-fotos/album-fotos.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurtidaWidgetComponent,
    MolduraFotoComponent,
    AlbumFotosComponent,
  ],
  providers: [UniqueIdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
