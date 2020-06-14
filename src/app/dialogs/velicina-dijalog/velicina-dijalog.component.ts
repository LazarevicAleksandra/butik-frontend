import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VelicinaService } from 'src/app/services/velicina.service';

@Component({
  selector: 'app-velicina-dijalog',
  templateUrl: './velicina-dijalog.component.html',
  styleUrls: ['./velicina-dijalog.component.css']
})
export class VelicinaDijalogComponent implements OnInit {
  public flag: number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<VelicinaDijalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public velicinaService: VelicinaService) { }

  ngOnInit() {
  }

  public add(): void {
    this.data.id = -1;
    this.velicinaService.addVelicina(this.data);
    this.snackBar.open("Uspešno dodata velicina: " , "U redu", { duration: 2500 });
  }

  public update(): void {
    this.velicinaService.updateVelicina(this.data);
    this.snackBar.open("Uspešno modifikovana velicina: ", "U redu", { duration: 2500 });
  }

  public delete(): void {
    this.velicinaService.deleteVelicina(this.data.id);
    this.snackBar.open("Uspešno obrisana velicina: " , "U redu", { duration: 1500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }
}