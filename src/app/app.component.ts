import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor( private http: HttpClient){}
  todos$: Observable<any> | undefined
  
  ngOnInit() {
    this.todos$ = this.http.get<any>('https://jsonplaceholder.typicode.com/todos')
  }

  returnty(data: string) {
    this.todos$!.pipe(
      map((data: any[]) => data.map(item => item.title)), 
      map((titles: string[]) => titles.filter(title => title.includes(data))),
      take(5)
    ).subscribe(filteredTitles => console.log(filteredTitles));
  }
}
