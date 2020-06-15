import { Kupac } from './../../model/Kupac';
import { Component, OnInit, ViewChild } from '@angular/core';
import { KupacService } from 'src/app/services/kupac.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { KupacDijalogComponent } from 'src/app/dialogs/kupac-dijalog/kupac-dijalog.component';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {
  displayedColumns = ['kupacID', 'brojTelefona', 'adresa','postanskiBroj', 'grad','ime', 'prezime', 'email','username','password','roleID', 'actions'];
  dataSource: MatTableDataSource<Kupac>;
 
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor(public kupacService: KupacService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }
 
  public loadData() {
  
   this.kupacService.getAllKupac().subscribe(data => {
     this.dataSource = new MatTableDataSource(data);
 
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
   });
 }
 
  public openDialog(flag: number,kupacID : number, brojTelefona : number, adresa : string,postanskiBroj : number, grad : string,ime : string, prezime : string, email : string, username : string, password : string,roleID:number ) {
    const dialogRef = this.dialog.open(KupacDijalogComponent, { data: {kupacID : kupacID, brojTelefona : brojTelefona, adresa : adresa,postanskiBroj : postanskiBroj, grad : grad,ime : ime, prezime : prezime, email : username, username : email, password : password,roleID:roleID } });
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

