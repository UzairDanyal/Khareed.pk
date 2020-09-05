/*
 * khareed.pk
 * uzair usama
 
 */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PagesSandbox } from '../../../../../../../core/admin/cms/pages/pages.sandbox';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './pages-layout.component.html',
  styleUrls: ['./pages-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesLayoutComponent implements OnInit {
  constructor(public pageSandbox: PagesSandbox) {}
  ngOnInit() {
    this.getPagesLists();
  }
  getPagesLists() {
    this.pageSandbox.getPagePagination({ count: 1 });
    this.pageSandbox.getActivePageCount({ count: 1, status: 1 });
    this.pageSandbox.getInactivePageCount({ count: 1, status: 0 });
  }
}
