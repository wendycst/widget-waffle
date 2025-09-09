/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HeaderComponent } from '@widget-waffle/widget-waffle-core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, MatSidenavModule, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Widget Waffle';

  @Output() newWidthOut: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.newWidthOut.emit(window.innerHeight);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.newWidthOut.emit(event.target.innerHeight);
  }
}
