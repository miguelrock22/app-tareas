import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TaskDialogComponent, DialogData}  from './task-dialog/task-dialog.component';

import { TaskService } from '../../services/task/task.service';
import { TaksEntity } from '../../classes/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks:[TaksEntity];
  displayedColumns: string[] = ['name', 'priority', 'end_date', '_id'];
  resultsLength:number;
  paginator: MatPaginator;

  name: string;
  priority: number;
  end_date: Date;

  constructor(
    private taksService: TaskService,
    public dialog: MatDialog
    ) { }

    openDialog() {
      const dialogRef = this.dialog.open(TaskDialogComponent,
        {data: {name: this.name, priority: this.priority, end_date: this.end_date, action: "Agregar"}}
      );
  
      dialogRef.afterClosed().subscribe(data => {
        this.name = data.name;
        this.priority = data.priority;
        this.end_date = data.end_date
        console.log(this.name,this.priority,this.end_date);
      });
    }

  async ngOnInit() {
    await this.taksService.getTasks().subscribe(data => {
      this.tasks = data.tasksDb;
      this.resultsLength = data.count;
    });
  }

  edit(id:string){
    console.log(id);
  }

  delete(id:string){
    console.log(id);    
  }

  add(){
    console.log("task");
  }

}