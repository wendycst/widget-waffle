import Material from '@primeng/themes/material';
import { definePreset } from '@primeng/themes';

export const WidgetWafflePreset = definePreset(Material, {
  semantic: {
    primary: {
      50: '#e3f0fa',
      100: '#b8d4ef',
      200: '#8ab8e3',
      300: '#5c9cd7',
      400: '#3685cb',
      500: '#005bac', // main color
      600: '#00529b',
      700: '#00477a',
      800: '#003c63',
      900: '#002943',
      950: '#001526',
    },
    icon: {
      size: '0.775rem',
    },
    datatable: {
      header: {
        cell: {
          color: 'black !important',
          background: 'var(--ev-color-table-header-cell-background) !important',
          padding: '0 0',
          hover: {
            background:
              'var(--ev-color-table-header-cell-background) !important',
          },
          selected: {
            background:
              'var(--ev-color-table-header-cell-background) !important',
          },
        },
      },
    },
  },
});
