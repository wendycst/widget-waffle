import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { DatePickerConfig } from './date-picker.model';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import moment from 'moment';

const DEFAULT_INPUT = 'DDMMYYYY';
const DEFAULT_FORMAT = 'DD/MM/YYYY';

const APP_MOMENT_DATE_FORMATS =
{
    parse: {
      dateInput: DEFAULT_INPUT,
    },
    display: {
      dateInput: DEFAULT_FORMAT,
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    }
};

@Component({
  selector: 'app-date-picker',
  standalone: true,
  providers: [
    provideNativeDateAdapter(), 
    {
      provide: MAT_DATE_FORMATS,
      useFactory: (comp: DatePickerComponent) => 
        APP_MOMENT_DATE_FORMATS,
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
export class DatePickerComponent implements OnChanges{
  @Input() config?: DatePickerConfig;
  @Input() formControl: any;
  minDate = new Date(1990, 0, 1);
  maxDate = new Date(); 

  constructor(@Inject(MAT_DATE_FORMATS) public format: any) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']?.currentValue) {
      this.format.parse.dateInput = this.config?.inputFormat;
      this.format.display.dateInput = this.config?.displayFormat;
    }
  }

  validateInput(event: KeyboardEvent) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  validateInputBlur() {
    const parsed = moment(this.formControl.value, this.config?.inputFormat, true);
    const formatted = parsed.format('YYYY-MM-DDTHH:mm:ss');
    this.formControl.setValue(formatted, { emitEvent: false });
  }
}