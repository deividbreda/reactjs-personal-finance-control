import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transacao: Model,
    boleto: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('finances/transacaos', () => {
      return this.schema.all('transacao');
    })

    this.post('finances/transacaos', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transacao', data);
    })   

    this.get('finances/boletos', () => {
      return this.schema.all('boleto');
    })

    this.post('finances/boletos', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('boleto', data)
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

