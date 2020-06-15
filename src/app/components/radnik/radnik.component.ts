import { RadnikDijalogComponent } from './../../dialogs/radnik-dijalog/radnik-dijalog.component';
import { RadnikService } from './../../services/radnik.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Radnik } from 'src/app/model/Radnik';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-radnik',
  templateUrl: './radnik.component.html',
  styleUrls: ['./radnik.component.css']
})
export class RadnikComponent implements OnInit {
  displayedColumns = ['radnikID', 'brojLicneKarte', 'email','username','password','roleID', 'actions'];
  dataSource: MatTableDataSource<Radnik>;
 
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor(public radnikService: RadnikService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }
 
  public loadData() {
  
   this.radnikService.getAllRadnik().subscribe(data => {
     this.dataSource = new MatTableDataSource(data);
 
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
   });
 }
 
  public openDialog(flag: number,radnikID : number, brojLicneKarte : number,email : string, username : string, password : string ,roleID:number) {
    const dialogRef = this.dialog.open(RadnikDijalogComponent, { data: {radnikID : radnikID, brojLicneKarte : brojLicneKarte, email : email, username : username, password : password,roleID:roleID } });
    dialogRef.componentInstance.flag = flag;
 
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1){ 
         this.loadData();
      }
        
    });
  }
  applyFilter(filterValue: string){
   filterValue = filterValue.trim();
   filterValue = filterValue.toLocaleLowerCase();
   this.dataSource.filter = filterValue;
 }
 
 }

