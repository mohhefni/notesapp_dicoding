class UserHandler {
  constructor(service) {
    this._service = service;

    this.postUserHandler = this.postUserHandler.bind(this);
    this.getUsersHandler = this.getUsersHandler.bind(this);
  }

  postUserHandler(request, h) {
    try {
      const { name, email, password } = request.payload;

      const userId = this._service.addUser({ name, email, password });

      const response = h.response({
        status: 'success',
        message: 'User berhasil ditambahkan',
        data: { userId },
      });
      response.code(201);
      return response;
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(400);
      return response;
    }
  }

  getUsersHandler(request, h) {
    try {
      const users = this._service.getUsers();
      const response = h.response({
        status: 'success',
        message: 'Berhasil menampilkan user',
        data: {
          users,
        },
      });
      return response;
    } catch (error) {
      const response = h.response({
        status: 'success',
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }
}

module.exports = UserHandler;
