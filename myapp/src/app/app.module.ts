import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { ThemeComponent } from './theme/theme.component';
import { DataComponent } from './data/data.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FetchallComponent } from './fetchall/fetchall.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { TokenComponent } from './token/token.component';
import { CommonModule } from '@angular/common';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    ThemeComponent,
    DataComponent,
    FormbuilderComponent,ReactiveComponent, FetchallComponent, UpdateComponent, DeleteComponent, TokenComponent, LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
