import { ModelService } from './../../services/model.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-model-dijalog',
  templateUrl: './model-dijalog.component.html',
  styleUrls: ['./model-dijalog.component.css']
})
export class ModelDijalogComponent implements OnInit {
  public flag: number;

  constructor(public dialog: MatDialog,public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ModelDijalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public modelService: ModelService) { }

  ngOnInit() {
  }

  public add(): void {
    this.data.id = -1;
    this.modelService.addModel(this.data);
    this.snackBar.open("Uspešno dodat model: ", "U redu", { duration: 2500 });
  }

  public update(): void {
    this.modelService.updateModel(this.data);
    this.snackBar.open("Uspešno modifikovan model: " , "U redu", { duration: 2500 });
  }

  public delete(): void {
    this.modelService.deleteModel(this.data.id);
    this.snackBar.open("Uspešno obrisan model: " , "U redu", { duration: 1500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }
}