import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MatListModule } from '@angular/material/list';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule} from '@angular-material-components/datetime-picker';

import { LoginComponent } from './pages/login/login.component';
import { TaskComponent } from './pages/task/task.component';

import { AuthService } from './services/auth/auth.service';
import { TaskDialogComponent } from './pages/task/task-dialog/task-dialog.component';
import { RegisterComponent } from './pages/register/register.component';
import { TodayTasksComponent } from './pages/task/today-tasks/today-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    TaskDialogComponent,
    RegisterComponent,
    TodayTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    NgxMatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
