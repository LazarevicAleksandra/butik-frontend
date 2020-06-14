import { RacunDijalogComponent } from './../../dialogs/racun-dijalog/racun-dijalog.component';
import { RacunService } from './../../services/racun.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Racun } from 'src/app/model/Racun';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {


  displayedColumns = ['racunID', 'suma', 'datum','porudzbinaID','radnikID', 'actions'];
  dataSource: MatTableDataSource<Racun>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

 

  constructor(public httpClient: HttpClient, public racunService: RacunService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.racunService.getAllRacun().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

  public openDialog(flag: number, racunID: number,suma:number, datum:Date,porudzbinaID: number, radnikID: number){
    const dialogRef = this.dialog.open(RacunDijalogComponent,
                                        {data:{racunID: racunID, suma: suma, datum:datum,porudzbinaID:porudzbinaID,radnikID:radnikID}}
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