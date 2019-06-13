import { DataStore, Schema } from 'js-data';
import { HttpAdapter, addAction } from 'js-data-http';

const unburdenSchema = new Schema({
  type: 'object',
  properties: {
    user: { type: 'object', properties: {
        cpf: {type: 'string' },
        name: {type: 'string'},
        photo: {type: 'string'},
      }
    },
    create_at: { type: 'string' },
    unburden: { type: 'string' },
    isAnonimaty: { type: 'boolean'},
    visibility: {type: 'boolean'},
    key: {type: 'string'}
  }
});

class Unburden {
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
    this.store.defineMapper('unburden', {
      endpoint: 'unburden',
      schema: unburdenSchema
    });
    this.store.defineMapper('unburdens', {
      endpoint: 'unburdens',
      schema: unburdenSchema
    });
  }
}

export default Unburden;