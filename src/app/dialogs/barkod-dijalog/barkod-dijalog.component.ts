import { BarkodService } from './../../services/barkod.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BarKod } from 'src/app/model/BarKod';
import { BarkodComponent } from 'src/app/components/barkod/barkod.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-barkod-dijalog',
  templateUrl: './barkod-dijalog.component.html',
  styleUrls: ['./barkod-dijalog.component.css']
})
export class BarkodDijalogComponent implements OnInit {
  public flag: Number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<BarkodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BarKod,
    public barKodService: BarkodService,) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.data.barKodID = -1;
    this.barKodService.addBarKod(this.data);
    this.snackBar.open("Uspešno dodat barkod: " , "U redu", { duration: 2500 });
  }

  public update(): void {
    this.barKodService.updateBarKod(this.data);
    this.snackBar.open("Uspešno modifikovan barkod: " ,"U redu", { duration: 2500 });
  }

  public delete(): void {
    this.barKodService.deleteBarKod(this.data);
    this.snackBar.open("Uspešno obrisan barkod: " ,"U redu", { duration: 1500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }
}
