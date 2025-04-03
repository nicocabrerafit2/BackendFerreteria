import { ProductoService } from '../services/productoService.js';

export class ProductoController {
    constructor() {
        this.productoService = new ProductoService();
    }

    async getProductos(req, res) {
        try {
            const productos = await this.productoService.getProductos();
            res.json(productos);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener productos', error: error.message });
        }
    }

    async createProducto(req, res) {
        try {
            const producto = await this.productoService.createProducto(req.body);
            res.status(201).json(producto);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear producto', error: error.message });
        }
    }
} 