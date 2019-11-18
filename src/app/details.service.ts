import { Injectable } from '@angular/core';
import {Movie} from "../app/movie";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { 
    
  }
  url="http://localhost:8082";
  getData(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url+'/movie/get');
  }

delete(id):Observable<Movie[]>
{
  return this.http.delete<Movie[]>(this.url+`/movie/delete/${id}`);
}
add(movie):Observable<Movie>
{
  return this.http.post<Movie>(this.url+'/movie/save',movie);
}
edit(movie):Observable<Movie>
{
  return this.http.put<Movie>(this.url+'/movie/movie',movie);
}
getDataById(id):Observable<Movie>
{
  return this.http.get<Movie>(this.url+`/movie/movie/${id}`);
}
getDataByName(name):Observable<Movie[]>
{
return this.http.get<Movie[]>(this.url+'/movie/name/'+name);
}
getDataByDirector(director):Observable<Movie[]>
{
  return this.http.get<Movie[]>(this.url+'/movie/'+director);
}
}