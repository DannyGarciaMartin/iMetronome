import React from 'react';
import styled from 'styled-components';
import Gir from '/private/gir.jpg';
export class Logo extends React.Component {
  render() {
    return (
      <img className={this.props.className} src={this.props.src || Gir} />
    );
  }
};

export default styled(Logo)`
  width: 30px;
  height: 30px;
  border-radius: 10px;
`;
