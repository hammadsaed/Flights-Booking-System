class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    // try {
    const response = await this.model.create(data);
    return response;
    // } catch (error) {
    //   logger.error("Something went wrong in the Crud Repo : create");
    //   throw error;
    // }
  }

  async destroy(id) {
    try {
      await this.model.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      logger.error("Something went wrong in the Crud Repo : destroy");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      return response;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repo : get");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repo : getAll");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id,
        },
      });
      return response;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repo : update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
