import { Catalogue } from '@fem/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedCatalogue = createAction('[Catalogues] Reset Selected Catalogue');
export const resetCatalogues = createAction('[Catalogues] Reset Catalogues');

// Select Catalogue
export const selectCatalogue = createAction(
  '[Catalogues] Select Catalogue',
  props<{ selectedId: string }>()
);

// Load Catalogues
export const loadCatalogues = createAction('[Catalogues] Load Catalogues');

export const loadCataloguesSuccess = createAction(
  '[Catalogues] Load Catalogues Success',
  props<{ Catalogues: Catalogue[] }>()
);

export const loadCataloguesFailure = createAction(
  '[Catalogues] Load Catalogues Failure',
  props<{ error: any }>()
);

// Load Catalogue
export const loadCatalogue = createAction(
  '[Catalogues] Load Catalogue',
  props<{ CatalogueId: string }>()
);

export const loadCatalogueSuccess = createAction(
  '[Catalogues] Load Catalogue Success',
  props<{ Catalogue: Catalogue }>()
);

export const loadCatalogueFailure = createAction(
  '[Catalogues] Load Catalogue Failure',
  props<{ error: any }>()
);

// Create Catalogue
export const createCatalogue = createAction(
  '[Catalogues] Create Catalogue',
  props<{ Catalogue: Catalogue }>()
);

export const createCatalogueSuccess = createAction(
  '[Catalogues] Create Catalogue Success',
  props<{ Catalogue: Catalogue }>()
);

export const createCatalogueFailure = createAction(
  '[Catalogues] Create Catalogue Failure',
  props<{ error: any }>()
);

// Update Catalogue
export const updateCatalogue = createAction(
  '[Catalogues] Update Catalogue',
  props<{ Catalogue: Catalogue }>()
);

export const updateCatalogueSuccess = createAction(
  '[Catalogues] Update Catalogue Success',
  props<{ Catalogue: Catalogue }>()
);

export const updateCatalogueFailure = createAction(
  '[Catalogues] Update Catalogue Failure',
  props<{ error: any }>()
);

// Delete Catalogue
export const deleteCatalogue = createAction(
  '[Catalogues] Delete Catalogue',
  props<{ Catalogue: Catalogue }>()
);

export const deleteCatalogueCancelled = createAction('[Catalogues] Delete Catalogue Cancelled');

export const deleteCatalogueSuccess = createAction(
  '[Catalogues] Delete Catalogue Success',
  props<{ Catalogue: Catalogue }>()
);

export const deleteCatalogueFailure = createAction(
  '[Catalogues] Delete Catalogue Failure',
  props<{ error: any }>()
);

