import {Image} from './image';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public coverImg: Image
  ) { }
}
