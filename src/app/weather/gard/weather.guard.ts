import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorMessages } from 'src/app/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class WeatherGuard{
  /**
   *
   */
  constructor(private router:Router) {
    
  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):  boolean {
      let id: number = Number(route.paramMap.get('id'));
      if(isNaN(id)){
            alert(ErrorMessages.notNumber);
            this.router.navigate(['']);
            return false;
      }
      if (id === 0){
            alert(ErrorMessages.invalidId);
            this.router.navigate(['']);
            return false;
      }
    return true;
  }
  
}
