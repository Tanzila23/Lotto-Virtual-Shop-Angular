import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from 'src/app/model/EmployeeDetails';
import { UserService } from 'src/app/Shared/user.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employee-details-view',
  templateUrl: './employee-details-view.component.html',
  styleUrls: ['./employee-details-view.component.css']
})
export class EmployeeDetailsViewComponent implements OnInit {
  PracticeEmployeeList:EmployeeDetails[];
  constructor(private services:UserService) { }

  ngOnInit() {
    this.services.getEmployeeById().subscribe(res=>{
      this.dataSource.data=res as EmployeeDetails[]
    });
  }
  displayedColumns: string[] = ['Designation', 'Natoinality', 'Father Name', 'Mother Name',
  'Job Location'];
  dataSource = new MatTableDataSource<EmployeeDetails>();
}
