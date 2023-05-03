import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { State, ToDo, User, projects} from '../models/toDo.model'

@Injectable({
  providedIn: 'root'
})

export class MeService {
  apiUrl = environment.API_URL;
  Content_Type = environment.CONTENT_TYPE;
  Authorization = environment.AUTHORIZATION;

  constructor(private http: HttpClient) {}

    getProjects() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': this.Content_Type,
                'Authorization': this.Authorization
            }),
            body: {
                context: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTY4MjY1ODE0NSwiZXhwIjoxNjgyNjc2MTQ1fQ.65fVECm5Y2ukUCdWTs8daUI-mZqMkAPbqwV85U4Ccy8'
            }
        };
        const url = 'https://fake-trello-api.herokuapp.com/api/v1/me/boards';
        const data = this.http.get<projects[]>(`${this.apiUrl}/api/v1/me/boards`, httpOptions);
        console.log(data);
        return data;
    }

    getProjectslocal() {
        const data = this.http.get<projects[]>(`${this.apiUrl}/projects`,);
        console.log(data);
        return data;
    }
}

