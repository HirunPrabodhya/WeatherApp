import { Component, OnInit } from '@angular/core';
import { RequiredData } from '../interfaces/weather';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';
import { ErrorMessages, cardId, color, empty } from 'src/app/constant/constant';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  errorMessage: string = empty;
  weatherData:RequiredData | null = null; // to store specific weather data according to id
  color:string = empty; // tto store color value that is comming as query parameter
  sub:Subscription;// to store subscribe
    // add dependency injection to the constructor
  constructor(private activeRoute:ActivatedRoute, 
              private localStorageService:LocalStorageService, 
              private service:WeatherService,
              private router:Router) {
  }
ngOnInit(): void {
  this.color = this.activeRoute.snapshot.queryParamMap.get(color) || empty; //store query parameter value to show in the card header as backgroud-color
  
  this.sub = this.activeRoute.paramMap.subscribe(param=>{
      
    let id:number = Number(param.get(cardId)); // get router parameter ad store in variable (id)
   
      this.weatherData = this.getWeatherData(id); // call getWeatherData() method
 
  }

)
}
//define getWeatherData() method
  getWeatherData(id:number):RequiredData | null{
    //check weather local storage exist
      if(this.localStorageService.isLocalStorageExist()){
        let requriedData:RequiredData =  JSON.parse(this.localStorageService.getLocalStorageData()) // get data from local storage 
                                            .find((item:RequiredData)=>item.id === id); // check that id is exist or not
            if(!requriedData){
              this.errorMessage = ErrorMessages.dataError +  id; 
                return null;
            }
            
            return requriedData; // if requiredData exist then return it otherwise return null
      }
      
      else{
          this.router.navigate([empty]); // if local storage does not exist then navigate to the weather Component
          return null 
              
      }
  
}
ngOnDestroy(): void {
  this.sub.unsubscribe(); // call before Angular destroys the component 
}
  

}
