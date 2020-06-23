import {Image} from './image';
import {ProductSize} from "./productSize";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public description: string,
    public sizes: ProductSize[],
    public coverImg: Image
  ) { }
}
