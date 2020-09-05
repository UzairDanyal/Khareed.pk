/*
 * khareed.pk
 
 * uzair usama
 */
import {
  Component,
  AfterViewInit,
  EventEmitter,
  Output,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit, OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() userDetails: any;
  @Output() logout: EventEmitter<any> = new EventEmitter();
  public language: string;

  constructor() {}

  ngAfterViewInit() {
    // ----
  }
  ngOnInit(): void {}
}
