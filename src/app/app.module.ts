import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/book.component';
import { ListBookComponent } from './books/viewBook.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptviewComponent } from './receiptview/receiptview.component';
import { RestService } from './rest.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatSelectModule,MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule,MatTabsModule,MatTooltipModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from "@angular/forms";

import { ListStudentComponent,DialogContent } from './list-student/list-student.component';
import { MatTableModule} from '@angular/material/table';

import { MatDialogModule } from '@angular/material/dialog';

import { EditStudentComponent } from './edit-student/edit-student.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';





//import { MatDatepickerModule }  from "@angular/material/datepicker";
const appRoutes: Routes =[
{
	/*path: '',
	redirectTo: '/',
  pathMatch: 'full'*/
  path: '',
  component: LoginComponent
},
{
	path: 'student',
    component: StudentComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path : 'liststudent',
  component: ListStudentComponent
},

{ path: 'student/:id', 
  component: EditStudentComponent 
},
{
  path : 'receipt',
  component: ReceiptComponent
},
{
  path : 'receiptView',
  component: ReceiptviewComponent
},
{
  path : 'bookAdd',
  component: BooksComponent
},
{
  path : 'bookView',
  component: ListBookComponent
},
{
  path : 'home',
  component: HomeComponent
},

];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent,
    ListStudentComponent,

    DialogContent,
    EditStudentComponent,

    ReceiptComponent,
    ReceiptviewComponent,
    DialogContent,
    BooksComponent,
    ListBookComponent,
    HomeComponent

  ],
  imports: [
  RouterModule.forRoot(
  	appRoutes,
  	{
  		enableTracing: true }
  	),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogContent]
})
export class AppModule { }
