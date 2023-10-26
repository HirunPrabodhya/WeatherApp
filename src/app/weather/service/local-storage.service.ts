import { Injectable } from '@angular/core';
import { RequiredData } from '../interfaces/weather';
import { data } from 'src/app/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  
  //define to return boolean value according to the local storage existance
  isLocalStorageExist(): boolean{
      return !! localStorage.getItem(data);
  }
  //define to store RequiredData array data that comming from the Weather component to the local storage  
  createLocalStorage(array:RequiredData[]):void{
        localStorage.setItem(data,JSON.stringify(array));
  }
  // define to return data from the local storage
  getLocalStorageData():string{
     return localStorage.getItem(data)!;
  }
  // define to remove items from the local storage
  removeLocalStorage():void{
    localStorage.removeItem(data);
  }
}
