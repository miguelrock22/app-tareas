import { Component,Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

export interface DialogData {
  action: string;
  name: string;
  priority: number;
  end_date: moment.Moment;
}

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {
  @ViewChild('picker') picker: any;
  
  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    
  onNoClick(): void {
    this.dialogRef.close();
  }

}
