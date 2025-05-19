import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true 
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0 
  },
  stock: {
    type: Number,
    required: true,
    min: 0 
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  sku: {
    type: String,
    required: true,
    unique: true, 
    trim: true
  }, 
  images: {
    type: [String],
    validate: {
      validator: function(urls) {
        
        return urls.every(url => /^https?:\/\/.*$/.test(url));
      },
      message: 'Cada imagen debe ser una URL válida.'
    }
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Product', productSchema);
