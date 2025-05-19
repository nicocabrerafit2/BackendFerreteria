import { BasicService } from '../services/basic.service.js';

export class BasicController {
    constructor() {
        this.service = new BasicService();
    }

    async getAll(req, res) {
        try {
            const data = await this.basicService.getAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error getting data', error: error.message });
        }
    }
    
    async getById(req, res) {
        try {
            const data = await this.basicService.getById(req.params.id);
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error getting data', error: error.message });
        }
    }
    
    async findOne(req, res) {
        try {
            const data = await this.basicService.findOne();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error getting data', error: error.message });
        }
    }
    async update(req, res) {
        try {
            const data = await this.basicService.update(req.params.id, req.body);
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error updating data', error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const data = await this.basicService.delete(req.params.id);
            res.json({ message: 'Data deleted successfully', data });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting data', error: error.message });
        }
    }
    
    

    async create(req, res) {
        try {
            const data = await this.basicService.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error creating data', error: error.message });
        }
    }
    
} 