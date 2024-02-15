const mongoose = require('mongoose');

class BaseService {
  constructor(model) {
    this.model = model;
  }

  async getAll(page) {
    try {
      const pageSize = 10;
      return await this.model.find({}).sort({createdAt: -1}).limit(pageSize).skip(page * pageSize);
    } catch (error) {
      throw error;
    }
  }

  async getOne(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID format');
    }

    try {
      return await this.model.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      const newModelInstance = new this.model(data);
      const createdItem = await newModelInstance.save();
      return createdItem;
    } catch (error) {
      throw error;
    }
  }

  async update(data, id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID format');
    }

    try {
      const updatedItem = await this.model.findByIdAndUpdate(
        { _id: id },
        data,
        { new: true }
      );
      if (!updatedItem) {
        throw new Error('Item not found');
      }
      return updatedItem;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID format');
    }

    try {
      const deletedItem = await this.model.findByIdAndDelete(id);
      if (!deletedItem) {
        throw new Error('Item not found');
      }
      return deletedItem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BaseService;
