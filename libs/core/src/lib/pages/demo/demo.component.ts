import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconRegistry } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
import { DatePickerConfig } from '../../components/date-picker/date-picker.model';

@Component({
  selector: 'ev-demo',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, DatePickerComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  providers: [MatIconRegistry],
})
export class DemoComponent implements OnInit {
  datePickerConfig:DatePickerConfig = {
    inputFormat: 'DDMMYYYY',
    displayFormat: 'DD/MM/YYYY'
  };
  ngOnInit(): void {
    console.log('DemoComponent initialized');
  }
}
