import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topics'
})
export class TopicsPipe implements PipeTransform {

  transform(value: String): string {
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

  /*transform(value: string): string {
    return "Topic: "+value;
  }*/




}
