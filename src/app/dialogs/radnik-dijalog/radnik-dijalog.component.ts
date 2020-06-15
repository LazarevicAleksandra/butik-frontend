import { RadnikComponent } from './../../components/radnik/radnik.component';
import { RadnikService } from './../../services/radnik.service';
import { Radnik } from './../../model/Radnik';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-radnik-dijalog',
  templateUrl: './radnik-dijalog.component.html',
  styleUrls: ['./radnik-dijalog.component.css']
})
export class RadnikDijalogComponent implements OnInit {
  public flag: Number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RadnikComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Radnik,
    public radnikService: RadnikService,) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.data.radnikID = -1;
    this.radnikService.addRadnik(this.data);
    this.snackBar.open("Uspešno dodat radnik: " , "U redu", { duration: 2500 });
  }

  public update(): void {
    this.radnikService.updateRadnik(this.data);
    this.snackBar.open("Uspešno modifikovan radnik: " ,"U redu", { duration: 2500 });
  }

  public delete(): void {
    this.radnikService.deleteRadnik(this.data);
    this.snackBar.open("Uspešno obrisan radnik: " ,"U redu", { duration: 1500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }
}
