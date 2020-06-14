import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RacunService } from 'src/app/services/racun.service';

@Component({
  selector: 'app-racun-dijalog',
  templateUrl: './racun-dijalog.component.html',
  styleUrls: ['./racun-dijalog.component.css']
})
export class RacunDijalogComponent implements OnInit {
  public flag: number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RacunDijalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public racunService: RacunService) { }

  ngOnInit() {
  }

  public add(): void {
    this.data.id = -1;
    this.racunService.addRacun(this.data);
    this.snackBar.open("Uspešno dodat racun: ", "U redu", { duration: 2500 });
  }

  public update(): void {
    this.racunService.updateRacun(this.data);
    this.snackBar.open("Uspešno modifikovan racun: ", "U redu", { duration: 2500 });
  }

  public delete(): void {
    this.racunService.deleteRacun(this.data.id);
    this.snackBar.open("Uspešno obrisan racun: ", "U redu", { duration: 1500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }
}