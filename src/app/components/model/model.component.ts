import { ModelService } from './../../services/model.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Model } from 'src/app/model/Model';
import { ModelDijalogComponent } from 'src/app/dialogs/model-dijalog/model-dijalog.component';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  displayedColumns = ['modelID', 'naziv', 'opis', 'actions'];
  dataSource: MatTableDataSource<Model>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

 

  constructor(public httpClient: HttpClient, public modelService: ModelService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.modelService.getAllModel().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

  public openDialog(flag: number, id: number, naziv: string, opis: string){
    const dialogRef = this.dialog.open(ModelDijalogComponent,
                                        {data:{id: id, naziv: naziv, opis:opis}}
    );

    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result =>{
      if (result == 1)
        this.loadData();
    })
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}