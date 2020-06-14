import { BarkodDijalogComponent } from './../../dialogs/barkod-dijalog/barkod-dijalog.component';
import { BarkodService } from './../../services/barkod.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BarKod } from 'src/app/model/BarKod';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-barkod',
  templateUrl: './barkod.component.html',
  styleUrls: ['./barkod.component.css']
})
export class BarkodComponent implements OnInit {
  displayedColumns = ['barKodID', 'brojBarKoda', 'actions'];
  dataSource: MatTableDataSource<BarKod>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public httpClient: HttpClient, public barkodService: BarkodService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.barkodService.getAllBarKod().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

  public openDialog(flag: number, barKodID: number, brojBarKoda: number){
    const dialogRef = this.dialog.open(BarkodDijalogComponent,
                                        {data:{barKodID: barKodID, brojBarKoda: brojBarKoda}}
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