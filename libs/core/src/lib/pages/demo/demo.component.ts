import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconRegistry } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ev-demo',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  providers: [MatIconRegistry],
})
export class DemoComponent implements OnInit {
  ngOnInit(): void {
    console.log('DemoComponent initialized');
  }
}
