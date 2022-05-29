export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Widget extends BaseEntity {
  title: string;
  description: string;
}

export interface Catalogue extends BaseEntity {
  nama_produk: string;
  deskripsi: string;
}