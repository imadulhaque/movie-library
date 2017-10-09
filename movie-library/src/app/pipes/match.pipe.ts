import { Pipe, PipeTransform } from '@angular/core';
import {IMovie} from "../models/movie";

@Pipe({
  name: 'match'
})
export class MatchPipe implements PipeTransform {

  transform(value: IMovie[], args: string[]): IMovie[] {
    const filter: string = args && args[0] ? args[0].toLocaleLowerCase() : null;
    return filter ? value.filter((movie: IMovie) =>
    movie.title.toLocaleLowerCase().indexOf(filter) !== -1) : value;
  }

}
