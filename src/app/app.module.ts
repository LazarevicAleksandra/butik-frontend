import { browser } from 'protractor';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { StorageService } from 'src/app/services/storage.service';
import { LoginService } from 'src/app/services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialog,MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

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
import { MarkaComponent } from './components/marka/marka.component';
import { ModelComponent } from './components/model/model.component';
import { BarkodComponent } from './components/barkod/barkod.component';
import { VelicinaComponent } from './components/velicina/velicina.component';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { PorudzbinaartiklComponent } from './components/porudzbinaartikl/porudzbinaartikl.component';
import { PorudzbinaComponent } from './components/porudzbina/porudzbina.component';
import { RacunComponent } from './components/racun/racun.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ArtiklDijalogComponent } from './dialogs/artikl-dijalog/artikl-dijalog.component';
import {BarkodDijalogComponent} from './dialogs/barkod-dijalog/barkod-dijalog.component';
import { ModelDijalogComponent } from './dialogs/model-dijalog/model-dijalog.component';
import { VelicinaDijalogComponent } from './dialogs/velicina-dijalog/velicina-dijalog.component';
import { RacunDijalogComponent } from './dialogs/racun-dijalog/racun-dijalog.component'
import { MarkaDijalogComponent } from './dialogs/marka-dijalog/marka-dijalog.component';




@NgModule({
  declarations: [
    AppComponent,
    MarkaComponent,
    ModelComponent,
    BarkodComponent,
    VelicinaComponent,
    ArtiklComponent,
    PorudzbinaartiklComponent,
    PorudzbinaComponent,
    RacunComponent,
    HomeComponent,
    LoginComponent,
    ArtiklDijalogComponent,
    BarkodDijalogComponent,
    MarkaDijalogComponent,
    ModelDijalogComponent,
    VelicinaDijalogComponent,
    RacunDijalogComponent,
    ModelDijalogComponent,
    RacunDijalogComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    NoopAnimationsModule
  ],
  entryComponents: [ArtiklDijalogComponent, BarkodDijalogComponent, MarkaDijalogComponent,  ModelDijalogComponent,RacunDijalogComponent,VelicinaDijalogComponent],

  providers: [ MatDialog,ArtiklService,BarkodService,KupacService,MarkaService,ModelService,PorudzbinaService,
              PorudzbinaartiklService,RacunService,RadnikService,VelicinaService,LoginService,StorageService,SnackBarService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
