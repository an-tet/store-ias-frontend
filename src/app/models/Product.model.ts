export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description: string,
    public stock: number,
    public sizes?: string[],
    public gender?: string,
    public images?: Image[]
  ) {}
}

export interface Image {
  id: number;
  image: ImageImage;
}

export interface ImageImage {
  type: string;
  data: number[];
}
