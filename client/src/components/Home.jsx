import React from 'react';
import HomeRunEntry from './HomeRunEntry.jsx';

const Home = (props) => (
  <div>
    <ul className="homeRunsContainer">
      {
        props.notes.map((note, index) => (
          <li className="homeRunsItem homeRunContainer" key={index}>
            <div className="homeRun">
              <h4>Madi</h4><p>{note.note}</p>
            </div>
            <div className="homeRun">
              <h4>Kai</h4><p>{note.response}</p>
            </div>
          </li>
        ))
      }
    </ul>
  </div>
);

export default Home;
