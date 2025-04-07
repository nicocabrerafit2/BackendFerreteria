import { ProductService } from '../services/product.service.js';
import { BasicController } from './basic.controller.js';

export class ProductController extends BasicController {
    constructor() {
        super();
        this.basicService = new ProductService(); 
    }

}
