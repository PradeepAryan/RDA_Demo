import { Component, OnInit } from '@angular/core';
// import { TodoModel } from 'src/app/model/todo.model';
 import { StudentService } from 'src/app/service/student.service';
import { StudentModel } from '../model/student-model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  studentData: StudentModel[] = [];
  constructor(private studentService: StudentService) { }


  onLoadStudentDataClick(){
    this.loadData();
  }

  loadData(){
    this.studentService.getStudentDetails().subscribe((response:StudentModel[]) =>{
      if(response){
        this.studentData = response;
        console.log(this.studentData);
      }      
    },
    (error)=>{

    },
    ()=>{

    });   
  }

}
