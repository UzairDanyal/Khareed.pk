/*
 * khareed.pk
 
 * uzair usama
 */
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerHeaderComponent implements OnInit {
  constructor(public titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Customer');
  }
}
