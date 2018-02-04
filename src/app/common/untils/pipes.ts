import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

  transform(value:any, words:boolean) {

    if (value) {
      if (words) {
        return value.replace(/\b\w/g, first => first.toLocaleUpperCase());
      } else {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }

    return value;
  }
}
