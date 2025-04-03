import express from 'express';
import { ProductoController } from '../controllers/productoController.js';

const router = express.Router();
const productoController = new ProductoController();

router.get('/productos', (req, res) => productoController.getProductos(req, res));
router.post('/productos', (req, res) => productoController.createProducto(req, res));

router.get('/categorias', (req, res) => {
    res.json({ message: 'Lista de categorías' });
});

router.post('/categorias', (req, res) => {
    res.json({ message: 'Crear categoría' });
});

router.get('/usuarios', (req, res) => {
    res.json({ message: 'Lista de usuarios' });
});

router.post('/usuarios', (req, res) => {
    res.json({ message: 'Crear usuario' });
});

export default router; 