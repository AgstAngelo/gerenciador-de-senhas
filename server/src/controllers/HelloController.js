class HelloController {
  async index(req, res) {
    return res.json({ hello: 'biba' });
  }
}

export default new HelloController();