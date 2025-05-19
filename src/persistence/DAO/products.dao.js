import ProductModel from '../mongoDB/models/product.model.js';

class ProductDAO {
  async createProduct(data) {
    try {
      const product = new ProductModel(data);
      return await product.save();
    } catch (error) {
      throw new Error(`Error al crear el producto: ${error.message}`);
    }
  }

  async getAllProducts(filter = {}, options = {}) {
    try {
      return await ProductModel.find(filter, null, options);
    } catch (error) {
      throw new Error(`Error al obtener los productos: ${error.message}`);
    }
  }

  async getProductById(id) {
    try {
      return await ProductModel.findById(id);
    } catch (error) {
      throw new Error(`Error al obtener el producto por ID: ${error.message}`);
    }
  }

  async updateProduct(id, updateData) {
    try {
      return await ProductModel.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
      throw new Error(`Error al actualizar el producto: ${error.message}`);
    }
  }

  async deleteProduct(id) {
    try {
      return await ProductModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(`Error al eliminar el producto: ${error.message}`);
    }
  }

  async findBySKU(sku) {
    try {
      return await ProductModel.findOne({ sku });
    } catch (error) {
      throw new Error(`Error al buscar por SKU: ${error.message}`);
    }
  }
}

export default new ProductDAO();
