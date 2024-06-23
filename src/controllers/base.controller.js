class BaseController {
  async handleRequest(req, res, service, ...params) {
    try {
      const result = await service(...params);
      res.status(200).json(result);
    } catch (error) {
      console.error(`Error in ${service.name}:`, error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = BaseController;
