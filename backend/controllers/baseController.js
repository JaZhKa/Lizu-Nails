class BaseController {
  constructor(service) {
    this.service = service;
  }

  async getAll(req, res) {
    try {
      const items = await this.service.getAll();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    try {
      const item = await this.service.getOne(id);
      if (!item) {
        return res.status(404).json({ error: 'Not found' });
      }
      return res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    const { data } = req.body;
    try {
      const createdItem = await this.service.create(data);
      res.status(200).json(createdItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { data } = req.body;
    try {
      const updatedItem = await this.service.update(data, id);
      if (!updatedItem) {
        return res.status(400).json({ error: 'Invalid ID or not found' });
      }
      return res.json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedItem = await this.service.delete(id);
      if (!deletedItem) {
        return res.status(400).json({ error: 'Not found' });
      }
      return res.json(deletedItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BaseController;
