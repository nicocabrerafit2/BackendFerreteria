import express from 'express';
import apiRoutes from './routes/index.js';
import dotenv from 'dotenv'

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a la API de Ferretería',
        description: 'Esta API permite gestionar productos, pedidos y clientes de forma eficiente.',
        endpoints: [
            { method: 'GET', route: '/api/products', description: 'Obtiene la lista de productos' },
            { method: 'GET', route: '/api/orders', description: 'Obtiene la lista de pedidos' },
            { method: 'GET', route: '/api/customers', description: 'Obtiene la lista de clientes' }
        ],
        documentation: 'xxxx'
    });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
