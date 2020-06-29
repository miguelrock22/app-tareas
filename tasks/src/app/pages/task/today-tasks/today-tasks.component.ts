import { Component,OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss']
})
export class TodayTasksComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<TodayTasksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
    
  onNoClick(): void {
    this.dialogRef.close();
  }

   ngOnInit() {
    console.log(this.data);
    
  }

}
