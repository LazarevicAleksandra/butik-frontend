import { Injectable } from '@angular/core';
import { Role } from '../model/role';

@Injectable()
export class StorageService{
    
    setLoggedInUserRole(sub: string) {
        sessionStorage.setItem('role',sub);
    }

    getLoggedInUserRole()
    {
        return sessionStorage.getItem('role');
    }

    setLoggedInUserUsername(sub: string) {
        sessionStorage.setItem('username',sub);
    }

    getLoggedInUsername() :string {
        return sessionStorage.getItem('username');
    }


    public deleteAllInStorage()
    {
        sessionStorage.clear();
    }
}