import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimePipe } from './TimeSpan/time.pipe';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    TimePipe
  ],
  imports: [
    CommonModule
  ],
  providers:[
   
    DatePipe
  ],
  exports:[
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    TimePipe
  ]
})
export class SharedModule { }
