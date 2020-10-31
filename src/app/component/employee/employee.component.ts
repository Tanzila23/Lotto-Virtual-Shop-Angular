import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Designation } from 'src/app/model/Category copy';
import { UserService } from 'src/app/Shared/user.service';
import {MatTableDataSource} from '@angular/material/table';
import { Employee } from 'src/app/model/Employee';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { EmployeeDetailsViewComponent } from '../employee-details-view/employee-details-view.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeTestForm:FormGroup;
  employeeDesignationList:Designation[];
  EmployeeList:Employee[];
  constructor(private services:UserService,private toster:ToastrService,private dialog:MatDialog) { }

  ngOnInit() {
    this.employeeTestForm=new FormGroup({
      name:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      designation:new FormControl('',Validators.required),
      salary:new FormControl(null,Validators.required),
      id:new FormControl(0)
    })
    this.services.getDesignationApi().then(res=> this.employeeDesignationList = res as Designation[]);
    this.services.getEmpolyeeList().subscribe(res=>
      {this.dataSource.data=res as Employee[]}
      )
  }
  onSubmit(){
    if(this.employeeTestForm.valid){
     this.services.employeeApi(this.employeeTestForm.value).subscribe(
       (res:any)=>{
         this.employeeTestForm.reset();
         this.toster.success('Saved Succesfully!','Save');
       },
       err=>{
        if(err.status == 500){
        this.toster.error('Incorrect Username or Password','Authentication Failed');
        }else{
          console.log(err);
        }
      }
     )
    }
  }
  displayedColumns: string[] = ['Id', 'Name', 'Address', 'Designation',
  'Salary','action1','action2','action3'];
  dataSource = new MatTableDataSource<Employee>();
  practiceEmployeeUpdate(row){
    
    this.employeeTestForm.setValue(row);
  }
  practiceemployeeDelete(row){
    this.services.deleteEmployee(row.id).subscribe((res:any)=>{
      this.services.getEmpolyeeList().subscribe(res=>{
        this.dataSource.data=res as Employee[]
      });
      this.toster.success('Employee Delete Succesfull!','Order');
     
      },
      err=>{
        if(err.status == 400){
        this.toster.error('Something Error!','Failed');
        }else{
          console.log(err);
        }
      })
  }
  practiceEmployeeDetails(row){
    //this.services.getPracticeEmployeeById(row.id).subscribe()
    this.services.employeeDetailsId(row.id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    dialogConfig.maxHeight=500;
     
    this.dialog.open(EmployeeDetailsViewComponent,dialogConfig);
  }
}
