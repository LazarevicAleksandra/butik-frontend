import { MarkaComponent } from './../../components/marka/marka.component';
import { MarkaService } from './../../services/marka.service';
import { Marka } from './../../model/Marka';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-marka-dijalog',
  templateUrl: './marka-dijalog.component.html',
  styleUrls: ['./marka-dijalog.component.css']
})
export class MarkaDijalogComponent implements OnInit {
  public flag: Number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<MarkaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marka,
    public markaService: MarkaService,) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.data.markaID = -1;
    this.markaService.addMarka(this.data);
    this.snackBar.open("Uspešno dodata marka: " , "U redu", { duration: 2500 });
  }

  public update(): void {
    this.markaService.updateMarka(this.data);
    this.snackBar.open("Uspešno modifikovana marka: " ,"U redu", { duration: 2500 });
  }

  public delete(): void {
    this.markaService.deleteMarka(this.data);
    this.snackBar.open("Uspešno obrisana marka: " ,"U redu", { duration: 1500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }
}