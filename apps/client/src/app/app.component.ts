import { Component, OnInit } from '@angular/core';
import { Catalogue, Widget } from '@fem/api-interfaces';
import { WidgetsService, CataloguesService } from '@fem/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/widgets', icon: 'view_list', title: 'cekk' },
    { path: '/catalogue', icon: 'view_list', title: 'Catalogue' },
  ];

  widgets$: Observable<Widget[]>;
  catalogue$: Observable<Catalogue[]>;

  constructor(private widgetsService: WidgetsService, private catalogueService: CataloguesService) {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgets$ = this.widgetsService.all();
    this.catalogue$ = this.catalogueService.all();
  }

  logout() {  }

  toggleSidenav() { }
}
