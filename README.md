# Angular Coding Task

## Table of Contents

- [Setup Guide](#setup-guide)
- [Coding Task: Configurable Date Picker Component](#coding-task-configurable-date-picker-component)
  - [Requirements](#requirements)
  - [Integration](#integration)
  - [Implementation Notes](#notes)
  - [Sample Code](#sample-configuration-object)
  - [Submission Guidelines](#submission)

---

## Setup Guide

Follow these steps to set up and run the project:

1. **Install Node.js and npm**  
   Ensure you have Node.js version v24.5.0 or above and npm version v11.5.1 or above installed. You can check your current versions with:

   ```sh
   node --version
   npm --version
   ```

2. **Install Dependencies**  
   Run the following command in your project root to install all dependencies:

   ```sh
   npm ci
   ```

3. **Install Nx Extension**  
   Install the Nx Console extension in Visual Studio Code for better integration and developer experience.

4. **Run the Development Server**  
   To start the development server for the `widget-waffle` app, execute the following command in your terminal:

   ```sh
   npx nx serve widget-waffle
   ```

---

# Coding Task: Configurable Date Picker Component

## Requirements

Build a **custom date picker component** with the following features:

### Date Selection

- Users can select a date using a calendar interface (day, month, year).
- Users can also manually type the date.

### Library Requirement

- The date picker must be implemented using **Angular Material** or **PrimeNG** (your choice).

### Configurable Display

- The component must accept a configuration object:

  ```typescript
  {
    inputFormat: "DDMMYYYY",      // Format for manual entry (one of: DDMMYYYY, MMDDYYYY, or YYYYMMDD)
    displayFormat: "DD/MM/YYYY",  // Format for display after entry
  }
  ```

- Manual entry must support **one of the following formats** (as chosen via configuration):

  - `DDMMYYYY`
  - `MMDDYYYY`
  - `YYYYMMDD`

- After the user exits (blurs) the field **or via live validation**:
  - The date should be displayed in the configured display format (e.g., DD/MM/YYYY).
  - The underlying form value should be a date and time string in **ISO 8601 format without a time zone**:
    - Format: `YYYY-MM-DDTHH:mm:ss`
    - Example: `2025-09-08T00:00:00`

### Validation

- The field should **not accept alpha characters** (only numeric input).
- If an invalid date is entered (e.g., `99992025`), display an appropriate error message.
- **Default date is not required.**
- **Default allowed date range:**
  - Earliest: **01 Jan 1990**
  - Latest: **Current date**

## Integration

- The component must be usable in an **Angular reactive form**.
- On the **Demo page**, provide a sample reactive form with a single date field using your custom date picker.

## Notes

Your implementation should cover:

- Calendar UI for selection (using Angular Material or PrimeNG)
- Manual date input with validation
- Configurable formats (`DDMMYYYY`, `MMDDYYYY`, or `YYYYMMDD`)
- Display and value transformation (after blur or live validation)
- Integration with Angular reactive forms

---

## Sample Configuration Object

```typescript
const datePickerConfig = {
  inputFormat: 'DDMMYYYY',
  displayFormat: 'DD/MM/YYYY',
};
```

## Sample Reactive Form Usage

```typescript
// In DemoPageComponent
form = this.fb.group({
  date: ['', Validators.required],
});

// In template
<app-custom-date-picker
  [formControl]="form.get('date')"
  [config]="datePickerConfig">
</app-custom-date-picker>
```

---

## Submission

Please provide all relevant component, template, and configuration code.

**Requirements:**

- Include validation logic and error messaging
- Show integration in a demo Angular reactive form page
- Make sure to use **Angular Material** or **PrimeNG** for the calendar/date picker UI
- The form value must be a date and time string in the format `YYYY-MM-DDTHH:mm:ss` (no time zone)
- Support manual entry formats: `DDMMYYYY`, `MMDDYYYY`, or `YYYYMMDD` (as configured)
- Date formatting and validation should occur after field blur or via live validation
