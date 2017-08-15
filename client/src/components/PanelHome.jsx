import React from 'react';
import PanelEntry from './PanelEntry.jsx';

class PanelHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {notes} = this.props;
    return (
      <div className="panelsContainer">
        {notes.map((note, index) => {
          return <PanelEntry note={note} key={index}/>;
        })}
      </div>
    );
  }
}

export default PanelHome;
