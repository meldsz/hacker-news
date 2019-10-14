import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'formatDate'
})
export class DatePipe implements PipeTransform {
   transform(date: any): any {
     let formattedDate = new Date(date*1000)
     return formattedDate;
   }
}