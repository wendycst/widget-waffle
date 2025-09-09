export type DatePickerConfig = {
    inputFormat: DatePickerInputFormat;
    displayFormat: string;
}

export type DatePickerInputFormat = 'DDMMYYYY' | 'MMDDYYYY' | 'YYYYMMDD';