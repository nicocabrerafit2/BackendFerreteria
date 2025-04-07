export class ProductService {
    async getProducts() {
        return [
            { id: 1, name: 'Hammer', price: 25.99, stock: 10 },
            { id: 2, name: 'Screwdriver', price: 15.99, stock: 20 }
        ];
    }

    async createProduct(productData) {
        return {
            id: Date.now(),
            ...productData,
            createdAt: new Date()
        };
    }
} 