import { Component, OnInit } from '@angular/core';
import { Catalogue } from '@fem/api-interfaces';
import { CataloguesFacade } from '@fem/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-catalogue',
  templateUrl: './catalogue.component.html',
//   styleUrls: ['./catalogue.component.scss'],
})
export class CataloguesComponent implements OnInit {
  allCatalogues$: Observable<Catalogue[]> = this.CataloguesFacade.allCatalogues$;
  selectedCatalogue$: Observable<Catalogue> = this.CataloguesFacade.selectedCatalogue$;

  constructor(private CataloguesFacade: CataloguesFacade) {}

  ngOnInit(): void {
    this.reset();
    // this.CataloguesFacade.mutations$.subscribe((_) => this.reset())
  }

  reset() {
    this.loadCatalogues();
    this.selectCatalogue(null);
  }

  resetForm() {
    this.selectCatalogue(null);
  }

  selectCatalogue(Catalogue: Catalogue) {
    this.CataloguesFacade.selectCatalogue(Catalogue?.id);
  }

  loadCatalogues() {
    this.CataloguesFacade.loadCatalogues();
  }

  saveCatalogue(Catalogue: Catalogue) {
    this.CataloguesFacade.saveCatalogue(Catalogue);
  }

  deleteCatalogue(Catalogue: Catalogue) {
    this.CataloguesFacade.deleteCatalogue(Catalogue);
  }
}
