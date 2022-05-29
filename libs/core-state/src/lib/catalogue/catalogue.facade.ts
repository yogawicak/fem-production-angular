import { Injectable } from '@angular/core';
import { Catalogue } from '@fem/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as CataloguesActions from './Catalogues.actions';
import * as CataloguesSelectors from './Catalogues.selectors';

@Injectable()
export class CataloguesFacade {
  loaded$ = this.store.pipe(select(CataloguesSelectors.getCataloguesLoaded));
  allCatalogues$ = this.store.pipe(select(CataloguesSelectors.getAllCatalogues));
  selectedCatalogue$ = this.store.pipe(select(CataloguesSelectors.getSelectedCatalogue));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === CataloguesActions.createCatalogue({} as any).type ||
      action.type === CataloguesActions.updateCatalogue({} as any).type ||
      action.type === CataloguesActions.deleteCatalogue({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) { }

  selectCatalogue(selectedId: string) {
    this.dispatch(CataloguesActions.selectCatalogue({ selectedId }));
  }

  loadCatalogues() {
    this.dispatch(CataloguesActions.loadCatalogues());
  }

  loadCatalogue(CatalogueId: string) {
    this.dispatch(CataloguesActions.loadCatalogue({ CatalogueId }));
  }

  saveCatalogue(Catalogue: Catalogue) {
    if(Catalogue.id) {
      this.updateCatalogue(Catalogue);
    } else {
      this.createCatalogue(Catalogue);
    }
  }

  createCatalogue(Catalogue: Catalogue) {
    this.dispatch(CataloguesActions.createCatalogue({ Catalogue }));
  }

  updateCatalogue(Catalogue: Catalogue) {
    this.dispatch(CataloguesActions.updateCatalogue({ Catalogue }));
  }

  deleteCatalogue(Catalogue: Catalogue) {
    this.dispatch(CataloguesActions.deleteCatalogue({ Catalogue }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
