import { PorudzbinaartiklService } from './../../services/porudzbinaartikl.service';
import { PorudzbinaArtikl } from './../../model/PorudzbinaArtikl';

import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-porudzbinaartikl',
  templateUrl: './porudzbinaartikl.component.html',
  styleUrls: ['./porudzbinaartikl.component.css']
})
export class PorudzbinaartiklComponent implements OnInit {

  dataSource: MatTableDataSource<PorudzbinaArtikl>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

 

  constructor(public httpClient: HttpClient, public porudzbinaartiklService: PorudzbinaartiklService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.porudzbinaartiklService.getAllPorudzbinaArtikl().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}