import React, { useDebugValue, version } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import Client from './client';
import ClientForm from './ClientForm';

class App extends React.Component {

  state = {
    clients: [
      { id: 1, nom: "client 1" },
      { id: 2, nom: "client 2" },
      { id: 3, nom: "client 3" },
      { id: 4, nom: "client 4" }
    ],
    /*compteur: 0*/
  }

  /*
  handleClick() {
    const clients = this.state.clients.slice();
    clients.push({ id: 4, nom: "Anne Dupont" })
    this.setState({ compteur: this.state.compteur + 1 })
    this.setState({ clients: clients })
    console.log(this.state);
  }*/

  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) => {
      return client.id === id
    })

    clients.splice(index, 1)
    this.setState({ clients })
  }

  handleAdd = client => {
    const clients = this.state.clients.slice()
    clients.push(client)

    this.setState({ clients: clients })
  }

  render() {
    const title = "Liste des clients"

    return (
      <div>
        <h1> {title} </h1>
        {/*{this.state.compteur}
        <button onClick={() => this.handleClick()}>Click me</button>*/}
        <ul>
          {this.state.clients.map(client => (<Client details={client} onDelete={this.handleDelete} />))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

