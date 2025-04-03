export class ProductoService {
    async getProductos() {
        return [
            { id: 1, nombre: 'Martillo', precio: 25.99, stock: 10 },
            { id: 2, nombre: 'Destornillador', precio: 15.99, stock: 20 }
        ];
    }

    async createProducto(productoData) {
        return {
            id: Date.now(),
            ...productoData,
            createdAt: new Date()
        };
    }
} 