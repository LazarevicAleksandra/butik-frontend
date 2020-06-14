import { MarkaService } from './../../services/marka.service';
import { Marka } from './../../model/Marka';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MarkaDijalogComponent } from 'src/app/dialogs/marka-dijalog/marka-dijalog.component';

@Component({
  selector: 'app-marka',
  templateUrl: './marka.component.html',
  styleUrls: ['./marka.component.css']
})
export class MarkaComponent implements OnInit {

  displayedColumns = ['markaID', 'naziv', 'actions'];
  dataSource: MatTableDataSource<Marka>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

 

  constructor(public httpClient: HttpClient, public markaService: MarkaService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.markaService.getAllMarka().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

  public openDialog(flag: number, markaID: number, naziv: string){
    const dialogRef = this.dialog.open(MarkaDijalogComponent,
                                        {data:{markaID: markaID, naziv: naziv}}
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