import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transacao: Model,
  },


  routes() {
    this.namespace = 'api';

    this.get('/transacaos', () => {
      return this.schema.all('transacao');
    })

    this.post('/transacaos', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transacao', data);
    })   
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

