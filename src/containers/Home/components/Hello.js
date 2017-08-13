import React from 'react';
import './a.css';

export default class Hello extends React.Component {
  render() {
    return (
      <h1 className="q" onClick={() => { alert('hi'); }}>Hello 123</h1>
    );
  }
}

