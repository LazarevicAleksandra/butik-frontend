import { KupacService } from './../../services/kupac.service';
import { Kupac } from './../../model/Kupac';
import { KupacComponent } from './../../components/kupac/kupac.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-kupac-dijalog',
  templateUrl: './kupac-dijalog.component.html',
  styleUrls: ['./kupac-dijalog.component.css']
})
export class KupacDijalogComponent implements OnInit {
  public flag: Number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<KupacComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Kupac,
    public kupacService: KupacService,) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.data.kupacID = -1;
    this.kupacService.addKupac(this.data);
    this.snackBar.open("Uspešno dodat kupac: " , "U redu", { duration: 2500 });
  }

  public update(): void {
    this.kupacService.updateKupac(this.data);
    this.snackBar.open("Uspešno modifikovan kupac: " ,"U redu", { duration: 2500 });
  }

  public delete(): void {
    this.kupacService.deleteKupac(this.data);
    this.snackBar.open("Uspešno obrisan kupac: " ,"U redu", { duration: 1500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }
}
