import { DataStore } from 'js-data';
import { HttpAdapter } from 'js-data-http';

class User {
  constructor() {
    this.store = new DataStore();
    var httpAdapter = new HttpAdapter({
      basePath: 'http://localhost:3001',
      deserialize: function (mapper, response, opts) {
        // Else, do default behavior
        return response;
      },
      useFetch: true
    }
    );
    this.store.registerAdapter('http', httpAdapter, { 'default': true });
    this.store.defineMapper('user', {
      endpoint: 'users',
      schema: {
        type: 'object',
        properties: {
          cpf: { type: 'string' },
          name: { type: 'string' },
          email: { type: 'string' },
          birth_date: { type: 'string'},
          password: { type: 'string' },
          check_password: { type: 'string' }
        }
      }
    });
  }
}

export default User;