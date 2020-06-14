import { VelicinaService } from './../../services/velicina.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Velicina } from 'src/app/model/Velicina';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { VelicinaDijalogComponent } from 'src/app/dialogs/velicina-dijalog/velicina-dijalog.component';

@Component({
  selector: 'app-velicina',
  templateUrl: './velicina.component.html',
  styleUrls: ['./velicina.component.css']
})
export class VelicinaComponent implements OnInit {

  displayedColumns = ['velicinaID', 'naziv', 'oznaka','broj', 'actions'];
  dataSource: MatTableDataSource<Velicina>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

 

  constructor(public httpClient: HttpClient, public velicinaService: VelicinaService, public dialog: MatDialog) {}
  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.velicinaService.getAllVelicina().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

  public openDialog(flag: number, velicinaID: number, naziv: string,oznaka:string,broj:number){
    const dialogRef = this.dialog.open(VelicinaDijalogComponent,
                                        {data:{velicinaID: velicinaID, naziv: naziv,oznaka:oznaka,broj:broj}}
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