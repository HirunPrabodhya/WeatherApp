export interface RequiredData{
    id:number;
    name:string;
    dt:number;
    country:string;
    description:string;
    icon:string;
    temp:number;
    temp_min:number;
    temp_max:number;
    sunrise:number;
    sunset:number;
    pressure:number;
    humidity:number;
    visibility:number;
    deg:number;
    speed:number;
    
}
export interface City{
    CityCode:string;
    CityName:string;
    Temp:string;
    Status:string;
}
export interface Message{
    clientError:string;
    serverError:string;
    invalidId:string;
    notNumber:string;
    dataError:string;
}
export interface WeatherUrl{
    dashBoard:string;
    view:string;
    wildCard:string;
    
}