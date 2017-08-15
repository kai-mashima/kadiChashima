import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import browserHistory from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import $ from 'jquery';
import _ from 'lodash';
import Home from './components/Home.jsx';
import PanelHome from './components/PanelHome.jsx';
import {notes} from './data/notes.js';
import particleJS from 'particles.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: notes,
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.shuffleNotes = this.shuffleNotes.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  shuffleNotes() {
    var notesCopy = this.state.notes.slice();
    var count = notesCopy.length;

    while (count) {
      var rand = Math.floor(Math.random() * count--);
      var temp = notesCopy[count];
      notesCopy[count] = notesCopy[rand];
      notesCopy[rand] = temp;
    }

    this.setState({notes: notesCopy});
  }

  componentDidMount() {
    particlesJS.load('particles-js', './particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div className="mainContainer" id="bootstrap-overrides">
          <div className="topBarContainer">
            <div className="dropdown">
              <img src="./logo/menu.png" alt="Menu" width="40"></img>
              <div className="dropdown-content">
                <Link to="/">Home</Link>
                <Link to="/PanelHome">Panels</Link>
              </div>
            </div>
            <div className="logo">
              <img src="./logo/logo.png" width="260"/>
            </div>
            <div className="shufflebtndiv">
              <Button bsClass="shufflebtn" onClick={this.shuffleNotes}>Randomize Notes</Button>
            </div>
            <hr/>
          </div>
          <div className="mainBodyContainer">
            <div id="particles-js" className="behind">
            </div>
            <Route exact path="/" component={() => <Home notes={this.state.notes}/>}/>
            <Route path="/PanelHome" component={() => <PanelHome notes={this.state.notes}/>}/>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));