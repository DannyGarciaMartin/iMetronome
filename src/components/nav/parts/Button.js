import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <Link className={this.props.className} to={this.props.to}>
        {this.props.label}
      </Link>
    )
  }
};

export default styled(Button)`
  background-color: #dce8ff;
  color: #293959;
  border: 1px solid #3A407F;
  padding: 11px 25px;
  border-radius: 10px;
  margin: 0 10px;
  text-decoration: none;
  font-size: 16px;
  font-family: initial;
  :hover, :active {
    border: 1px solid #fff;
    padding: 10px 25px;
  }
  :focus {
    outline: none;
  }
`;
