import { DataStore } from 'js-data';
import { HttpAdapter, addAction } from 'js-data-http';

class System {
  constructor() {
    this.store = new DataStore();
    var httpAdapter = new HttpAdapter({
        basePath: 'http://localhost:3001',
        useFetch: true,
        beforeHTTP: function (config, opts) {
          config.headers || (config.headers = {});
          config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
          config.headers.accept = 'application/json';
          config.headers['content-type'] = 'application/json';
          return HttpAdapter.prototype.beforeHTTP.call(this, config, opts);
        }
      }
    );
    
    this.store.registerAdapter('http', httpAdapter, { 'default': true });
    this.store.defineMapper('system', {
      endpoint: 'system',
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
    addAction('isValidToken', {
      pathname: 'verifyToken',
      method: 'GET'
    })(this.store.getMapper('system'));
  }
}

export default System;