import styled from 'styled-components';
import React from 'react';

export class Limiter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className + " " + "limits"}>
        {this.props.children}
      </div>
    );
  }
};
export default styled(Limiter)`
  height: 100%;

  .limits {
    max-width: 1280px;
    width: 100%;
    height: 100%;

    @media only screen and (min-width: 1281px) {
      margin: 0 auto;
    }
  }
`;
