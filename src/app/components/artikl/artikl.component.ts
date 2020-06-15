import { VelicinaService } from './../../services/velicina.service';
import { Artikl } from './../../model/Artikl';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtiklService } from 'src/app/services/artikl.service';
import { ArtiklDijalogComponent } from 'src/app/dialogs/artikl-dijalog/artikl-dijalog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
 selector: 'app-artikl',
 templateUrl: './artikl.component.html',
 styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit {
 displayedColumns = [ 'artiklID', 'velicinaID', 'barKodID','dostupno', 'cena','modelID', 'markaID', 'tip', 'actions'];
 dataSource: MatTableDataSource<Artikl>;

 @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
 @ViewChild(MatSort, { static: true }) sort: MatSort;
 


 constructor(public artiklService: ArtiklService, public dialog: MatDialog) { }

 ngOnInit() {
   this.loadData();
 }

 public loadData() {
 
  this.artiklService.getAllArtikl().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

 public openDialog(flag: number,artiklID : number, velicinaID : number, barKodID : number,dostupno : boolean, cena : number,modelID : number, markaID : number, tip : string ) {
   const dialogRef = this.dialog.open(ArtiklDijalogComponent, { data: {artiklID : artiklID, velicinaID : velicinaID, barKodID : barKodID,dostupno : dostupno, cena : cena,modelID : modelID, markaID : markaID, tip : tip } });
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