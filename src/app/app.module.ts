import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtiklService } from './services/artikl.service';
import { BarkodService } from './services/barkod.service';
import { KupacService } from './services/kupac.service';
import { MarkaService } from './services/marka.service';
import { ModelService } from './services/model.service';
import { PorudzbinaService } from './services/porudzbina.service';
import { PorudzbinaartiklService } from './services/porudzbinaartikl.service';
import { RacunService } from './services/racun.service';
import { RadnikService } from './services/radnik.service';
import { VelicinaService } from './services/velicina.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArtiklService,BarkodService,KupacService,MarkaService,ModelService,PorudzbinaService,PorudzbinaartiklService,RacunService,RadnikService,VelicinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
