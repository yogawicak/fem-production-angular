import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Catalogue } from '@fem/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CataloguesService {
  model = 'Catalogues';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Catalogue[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Catalogue>(this.getUrlWithId(id));
  }

  create(Catalogue: Catalogue) {
    return this.http.post(this.getUrl(), Catalogue);
  }

  update(Catalogue: Catalogue) {
    return this.http.put(this.getUrlWithId(Catalogue.id), Catalogue);
  }

  delete(Catalogue: Catalogue) {
    return this.http.delete(this.getUrlWithId(Catalogue.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
