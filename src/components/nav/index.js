import React from 'react';
import styled from 'styled-components';

import Button from './parts/Button.js';
import Block from './parts/Block.js';
import Limiter from './parts/Limiter.js';
import Logo from './parts/Logo.js';

export {
  Button,
  Block,
  Limiter,
  Logo
};


export class NavigationBar extends React.Component {

  render() {
    return (
      <Block className={this.props.className + " " + "block"} orientation="h" height="80px">
        <Limiter className="limiter">
          <Logo className="logo" />
          <div className="nav-cta-group">
            <Button label="Biography" to="biography" />
            <Button label="Cryptography" to="cryptography" />
            <Button label="Library" to="library" />
          </div>
        </Limiter>
      </Block>
    );
  }
}

export default styled(NavigationBar)`
  .block {
    position: fixed;
  }
  .limiter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .limiter .logo {
    margin: 0 30px;
  }
  .nav-cta-group :last-child {
    margin-right: 25px;
  }
`;
