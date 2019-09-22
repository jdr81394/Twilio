import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


import { SendSmsComponent } from './send-sms.component';

@NgModule({
  declarations: [SendSmsComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [SendSmsComponent]
})
export class SendSmsModule { }
