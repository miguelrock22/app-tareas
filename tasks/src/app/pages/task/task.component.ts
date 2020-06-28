import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TaskDialogComponent }  from './task-dialog/task-dialog.component';

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
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
    ) { }

    openDialog(id?: string) {
      let action = "Agregar";
      let task;
      this.name = "";
      this.priority = null;
      this.end_date = null;
      if(id){
        action = "Editar";
        task = this.tasks.find(t => t._id === id);
        this.name = task.name;
        this.priority = task.priority;
        this.end_date = task.end_date;
      }
      const dialogRef = this.dialog.open(TaskDialogComponent,
        {data: {name: this.name, priority: this.priority, end_date: this.end_date, action}}
      );
  
      dialogRef.afterClosed().subscribe(data => {
        if(action == "Agregar")
          this.add(data);
        else{
          data._id = task._id;
          this.edit(data);
        }
      });
    }

  ngOnInit() {
    this.getTable();
  }

  private async getTable(){
    await this.taksService.getTasks().subscribe(data => {
      this.tasks = data.tasksDb;
      this.resultsLength = data.count;
    });
  }

  private async edit(task){
    await this.taksService.updateTask(task).subscribe(data => {
      let message = "Se ha editado la tarea correctamente.";
      if(data)
        this.getTable();
      else
        message = "Error editando la tarea";
      this.openSnackBar(message);
    });
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, "Cerrar", {
      duration: 3000,
    });
  }

  async delete(id:string){
    await this.taksService.deleteTask(id).subscribe(data => {
      let message = "Se ha eliminado la tarea correctamente.";
      if(data)
        this.getTable();
      else
        message = "Error eliminando la tarea";
      this.openSnackBar(message);
    });   
  }

  private async add(task){
    this.name = task.name;
    this.priority = task.priority;
    this.end_date = task.end_date
    await this.taksService.addTask({
      name: this.name,
      priority: this.priority,
      end_date: this.end_date
    }).subscribe(data => {
      let message = "Se ha agregado la tarea correctamente.";
      if(data)
        this.getTable();
      else
        message = "Error agregando la tarea";
      this.openSnackBar(message);
    });
  }

}