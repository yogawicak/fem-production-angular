import { Catalogue } from '@fem/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CataloguesService {
  mockCatalogues: Catalogue[] = [
    { id: '1', nama_produk: 'Nest Catalogue 01', deskripsi: 'This is a Nest Catalogue' },
    { id: '2', nama_produk: 'Nest Catalogue 02', deskripsi: 'This is a Nest Catalogue' },
    { id: '3', nama_produk: 'Nest Catalogue 03', deskripsi: 'This is a Nest Catalogue' },
  ];

  findAll() {
    return this.mockCatalogues;
  }

  findOne(id: string) {
    return this.mockCatalogues.find((Catalogue) => Catalogue.id === id);
  }

  create(Catalogue: Catalogue) {
    this.mockCatalogues = [...this.mockCatalogues, Object.assign({}, Catalogue, { id: uuidv4() })];
    return this.mockCatalogues;
  }

  update(id: string, Catalogue: Catalogue) {
    this.mockCatalogues = this.mockCatalogues.map((w) => (w.id === id ? Catalogue : w));
    return this.mockCatalogues;
  }

  remove(id: string) {
    this.mockCatalogues = this.mockCatalogues.filter((Catalogue) => Catalogue.id !== id);
    return this.mockCatalogues;
  }
}
