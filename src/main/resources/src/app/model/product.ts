import {Image} from './image';
import {ProductSize} from './productSize';
import {ProductCategory} from './productCategory';
import {ProductMeasurement} from './productMeasurement';
import {ProductOccasion} from './productOccasion';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public quickDesc: string,
    public material: string,
    public fittingInfo: string,
    public washInfo: string,
    public description: string,
    public dryClean: boolean,
    public coverImg: Image,
    public images: Image[],
    public sizes: string
  ) { }
}
