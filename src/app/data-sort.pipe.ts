import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataSort'
})
export class DataSortPipe implements PipeTransform {

  transform(value: any): any {
  //  let newString = (a: any, b: any) =>{
  //    newString.sort((a,b)=> a.locale)
  //  }
  value.sort((a: any, b: any) => a.name.localeCompare(b.name))

  return value
  }

  
}
