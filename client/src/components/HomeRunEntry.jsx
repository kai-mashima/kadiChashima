import React from 'react';

const HomeRunEntry = ({note}) => (
  <li className="homeRunsItem homeRunContainer">
    <div className="homeRun">
      <h4>Madi</h4><p>{note.note}</p>
    </div>
    <div className="homeRun">
      <h4>Kai</h4><p>{note.response}</p>
    </div>
  </li>
);

export default HomeRunEntry;


