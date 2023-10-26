import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorMessages, cardId, cityApi, empty, urlPart, weatherApi } from 'src/app/constant/constant';
import { City } from '../interfaces/weather';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   
  constructor(private http:HttpClient) { }

  getCities():Observable<{[key:string]:City[]}>{
      return this.http.get<{[key:string]:City[]}>(cityApi)
                      .pipe(
                              catchError(this.handleError)
                          );
  }
  getWeather(id:string):Observable<any>{
    return this.http.get<any>(`${weatherApi}=${id}${urlPart}${environment.apiKey}`)
                    .pipe(
                        catchError(this.handleError)
                        );
                    
  }
  getSpecificWeather(id:string){
        return this.http.get(`${weatherApi}=${id}${urlPart}${environment.apiKey}`)
  }

  private handleError(err:HttpErrorResponse):Observable<never>{
      let errorMessage = empty;
      if(err.error instanceof ErrorEvent)
            errorMessage = `${ErrorMessages.clientError}: ${err.error.message}`;
      
      else
          errorMessage = `${ErrorMessages.serverError}${err.status}:${err.message}`;

      return throwError(()=>errorMessage)
  }
}
