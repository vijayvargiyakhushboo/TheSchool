import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatSelectModule,MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule,MatTabsModule,MatTooltipModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { ListStudentComponent,DialogContent } from './list-student/list-student.component';
import {MatTableModule} from '@angular/material/table';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptviewComponent } from './receiptview/receiptview.component';
import { MatDialogModule } from '@angular/material/dialog';

import { EditStudentComponent } from './edit-student/edit-student.component';
import {MatExpansionModule} from '@angular/material/expansion';


import { BooksComponent } from './books/book.component';
import { ListBookComponent } from './books/viewBook.component';


//import { MatDatepickerModule }  from "@angular/material/datepicker";
const appRoutes: Routes =[
{
	path: '',
	redirectTo: '/',
    pathMatch: 'full'
    //component: AppComponent
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
}

];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent,
    ListStudentComponent,

    DialogContent,
    EditStudentComponent

    ReceiptComponent,
    ReceiptviewComponent,
    DialogContent,
    BooksComponent,
    ListBookComponent

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
