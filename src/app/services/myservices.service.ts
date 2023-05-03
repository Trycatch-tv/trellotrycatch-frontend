import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { State, ToDo, User, projects} from '../models/toDo.model'

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {

  constructor() { }
}
