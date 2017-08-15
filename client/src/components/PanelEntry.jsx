import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

class PanelEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({open: !this.state.open});
  }

  render() {
    const {note} = this.props;
    return (
      <div className="panelsContainer">
        <Panel bsClass="panelsEntry" onClick={this.handleClick}>
          <p>{note.note}</p>
        </Panel>
        <Panel bsClass="panelsEntry" collapsible expanded={this.state.open}>
          <p>{note.response}</p>
        </Panel>
      </div>
    );
  }
}

export default PanelEntry;
