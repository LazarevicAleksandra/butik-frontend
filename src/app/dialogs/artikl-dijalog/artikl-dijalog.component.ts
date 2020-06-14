
import { VelicinaService } from 'src/app/services/velicina.service';

import { Component, OnInit, Inject } from '@angular/core';
import { ArtiklService } from 'src/app/services/artikl.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { Artikl } from 'src/app/model/Artikl';
import { Velicina } from 'src/app/model/Velicina';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-artikl-dijalog',
  templateUrl: './artikl-dijalog.component.html',
  styleUrls: ['./artikl-dijalog.component.css']
})
export class ArtiklDijalogComponent implements OnInit {
public flag: Number;

private velicina:Velicina;

constructor( private velicinaService:VelicinaService,public snackBar: MatSnackBar,
  public dialogRef: MatDialogRef<ArtiklDijalogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Artikl,
  public artiklService: ArtiklService
) { }

ngOnInit() {}




public add(): void {
  this.data.artiklID = -1;
  this.artiklService.addArtikl(this.data);
  this.snackBar.open("Uspešno dodat artikl", "U redu", { duration: 2500 });
}

public update(): void {
  this.artiklService.updateArtikl(this.data);
  this.snackBar.open("Uspešno modifikovan artikl", "U redu", { duration: 2500 });
}

public delete(): void {
  this.artiklService.deleteArtikl(this.data.artiklID);
  this.snackBar.open("Uspešno obrisan artikl", "U redu", { duration: 2000 });
}

public cancel(): void {
  this.dialogRef.close();
  this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
}
}
