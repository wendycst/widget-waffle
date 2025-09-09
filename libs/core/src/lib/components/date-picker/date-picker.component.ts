import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { DatePickerConfig } from './date-picker.model';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

export function createDateFormats(input: string, display: string) {
  return {
    parse: { dateInput: input },
    display: {
      dateInput: display,
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };
}

@Component({
  selector: 'app-date-picker',
  standalone: true,
  providers: [
    provideNativeDateAdapter(), 
    {
      provide: MAT_DATE_FORMATS,
      useFactory: (comp: DatePickerComponent) => 
        createDateFormats(comp.config.inputFormat, comp.config.displayFormat),
      deps: [DatePickerComponent],
    }, 
    { 
      provide: DateAdapter, 
      useClass: MomentDateAdapter, 
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] 
    },
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule
  ],
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent {
  @Input() config: DatePickerConfig = {
    inputFormat: 'DDMMYYYY',
    displayFormat: 'DD/MM/YYYY'
  }
}