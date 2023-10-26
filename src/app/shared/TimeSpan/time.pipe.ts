import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { timePattern } from 'src/app/constant/constant';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {
  }
 transform(value: number): string | null{
   const date = new Date(value * 1000); // Convert Unix timestamp to Date object
   return this.datePipe.transform(date, timePattern); // Format the Date object
 }

}
