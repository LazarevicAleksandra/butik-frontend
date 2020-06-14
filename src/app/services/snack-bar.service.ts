
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService{

    constructor(private snackBar:MatSnackBar){}

    showShortSnackBarMessage(message:string)
    {
        this.openSnackBar(message,1500);
    }

    showLongSnackBarMessage(message:string)
    {
        this.openSnackBar(message,3000);
    }

    openSnackBar(message:string, durationMilliseconds:number)
    {
        this.snackBar.open(message, "X",{
            duration: durationMilliseconds
          })
    }
}