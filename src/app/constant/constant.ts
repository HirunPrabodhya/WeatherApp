import { Message, WeatherUrl } from "../weather/interfaces/weather";

export const COLORS:string[] = ['card-blue','card-purple','card-green','card-orange','card-red','card-purple','card-red','card-orange'];
export const cityApi:string = 'assets/json/cities.json';
export const units:string = 'metric';
export const weatherUrl: string = `/data/2.5/group?`;
export const message:string = `weather data isn\'t existed by`;
export const timePattern:string = 'h:mm a, MMM d';
export const weatherApi:string = 'http://api.openweathermap.org/data/2.5/group?&id'
export const urlPart:string = '&units=metric&appid='
export const data:string = 'data';
export const cardId:string = 'id';
export const color:string = 'color';
export const empty:string = '';
export const cityCodesList:string = 'List';
export const weatherList:string = 'list';
export const comma:string = ',';
export const ErrorMessages:Message = {
    clientError:'An error occured: ',
    serverError:'server return code: ',
    invalidId:'invalid id',
    notNumber:'weather id is not a number',
    dataError: 'weather data isn\'t existed by '

}
export const urlPath:WeatherUrl = {
        dashBoard:'weather',
        view:'weather/:id',
        wildCard:'**',
       
}