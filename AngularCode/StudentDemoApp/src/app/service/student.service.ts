import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentModel } from '../model/student-model';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor(private http: HttpClient) { }

  getStudentDetails(): Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>(`${environment.apiPath}Student/GetStudentDetails`);
  }

}
