import { Component, OnInit } from '@angular/core';
import { COLORS, cityCodesList, comma, empty, urlPath, weatherList } from 'src/app/constant/constant';
import { City, RequiredData } from '../interfaces/weather';
import { Subscription } from 'rxjs';
import { WeatherService } from '../service/weather.service';
import { LocalStorageService } from '../service/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    colors:string[] = COLORS;// to store card colors
    cityCodes:string[] = [];//to store city codes 
    cityCodeIds:string = empty;//to store city codes as string to send as query parameter to the url
    errorMessage:string = empty;// to store errors
    weatherData:RequiredData[] = []; // to store required weather data
    sub:Subscription;// to store subscribe
    // add dependency injection to the constructor
    
constructor(private service: WeatherService, private localStorageService:LocalStorageService, private router:Router) {}
  // used to perform any additional initialization that required for the component
    ngOnInit(): void {
       this.sub = this.service.getCities().subscribe({
            next:(result:{[key:string]:City[]})=>{
                  this.cityCodes = result[cityCodesList].map(x=>x.CityCode);// get city code to cityCodes array
                  this.cityCodeIds = this.cityCodes.join(comma);// join all city codes and assign into cityCodeIds (type: string)
                  this.getData(this.cityCodeIds);// call getData() method
                  
            },
            error:(error:string)=>this.errorMessage = error // assign erro to the errorMessage
            
       });
        // remove data from the local storage after 5 min
          setTimeout(()=>{
            this.localStorageService.removeLocalStorage();
        },5 * 60 * 1000);

    }
      // defined getData() method
    getData(id:string){
       //if local storage is empty execute if part
      if(!this.localStorageService.isLocalStorageExist()){
            this.service.getWeather(id)
                        .subscribe({
                            next:(result:any)=> this.weatherData = this.addData(result[weatherList]),
                            error:(error:string)=>this.errorMessage = error
                        })
      }
      //if local storage is exist  the execute else part
      else{
        this.weatherData = JSON.parse(this.localStorageService.getLocalStorageData());
      }
          
    }
        //defined addData() method
    addData(result:any[]){
          let myArray:RequiredData[] = result.map(value=>{
              return{
                  id:value.id,
                  name:value.name,
                  dt:value.dt,
                  country:value.sys.country,
                  description:(value.weather.map((des:any)=>des.description)).join(empty),
                  icon:value.weather.map((icn:any)=>icn.icon).join(empty),
                  temp:value.main.temp,
                  temp_min:value.main.temp_min,
                  temp_max:value.main.temp_max,
                  sunrise:value.sys.sunrise,
                  sunset:value.sys.sunset,
                  pressure:value.main.pressure,
                  humidity: value.main.humidity,
                  visibility: value.visibility,
                  deg: value.wind.deg,
                  speed:value.wind.speed  
              }
          }

          )
         
          this.localStorageService.createLocalStorage(myArray)
         
            
            return myArray;// return myArray to the weatherData variable
          
          
    }
    navigateTotheView(id:number,color:string){
      this.router.navigate([`/${urlPath.dashBoard}`,id],{queryParams:{color:color}})
                  .then(()=>window.scroll(0,0)); // move to the top of the navigated page
    }
    ngOnDestroy(): void {
      this.sub.unsubscribe(); // call before Angular destroys the component 
    }
    
}
