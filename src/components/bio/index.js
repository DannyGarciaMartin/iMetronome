import React, { Component } from 'react';
import { Logo } from "./../nav";
import Doggie from "/private/danny-maymay.jpg";
import styled from 'styled-components';

class Biography extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      punchList: {
        a: true,
        b: false,
        c: false,
      },
    };
  }

  componentDidMount() {
    let counter = this.state.counter;
    this.intervals = setInterval(() => {
      if (counter === 1) {
        this.setPunchList("a", false);
        this.setPunchList("b", true);
        this.setState({
          counter: counter++,
        });
      }
      else if (counter === 2) {
        this.setPunchList("b", false);
        this.setPunchList("c", true);
        this.setState({
          counter: counter++,
        });
      }
      else if (counter === 3) {
        counter -= 2;
        this.setPunchList("a", true);
        this.setPunchList("c", false);
        this.setState({
          counter: counter,
        });
      }
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.intervals);
  }
  setPunchList(item, value) {
    const punchList = this.state.punchList;
    this.setState({
      punchList: {
        ...punchList,
        [item]: value,
      }
    });
  }

  render() {
    const punchList = this.state.punchList;
    const aType = punchList.a ? "active" : "inactive";
    const bType = punchList.b ? "active" : "inactive";
    const cType = punchList.c ? "active" : "inactive";
    return (
      <div className={this.props.className}>
        <Section>
          <div className="punch-list">
            <H1 className={aType}>Danny Martin</H1>
            <H1 className={bType}>Web Developer</H1>
            <H1 className={cType}>Foodie</H1>
          </div>
          <Logo className="logo" src={Doggie}>
          </Logo>
        </Section>
        <Section className="brand-group" bg="#fff" height="100px">
          <Logo className="brands" src="https://www.bookweb.org/sites/default/files/gallery/BLM.png" />
          <Logo className="brands" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png" />
          <Logo className="brands" src="https://healthblawg.com/images/old/6a00d83451d52c69e201a3fcaec9b9970b-pi.jpg" />
          <Logo className="brands" src="https://static1.squarespace.com/static/569e6cd9bfe8737de92f6e5c/t/56b389f9c2ea51e258f2edc2/1604283905851/" />
          <Logo className="brands" src="https://st2.depositphotos.com/1791514/11150/v/450/depositphotos_111505904-stock-illustration-swimmer-athlete-swimmer-the-emblem.jpg"/>
          <Logo className="brands" src="https://i.pinimg.com/originals/ac/4d/64/ac4d64dfebabdfc0a2a15ac8c3211494.jpg" />
        </Section>
        <Section>
          
        </Section>
      </div>
    );
  }

};

const Section = styled.section`
  height: ${props => props.height || "400px"};
  background-color: ${props => props.bg || "#BAD1FF"};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 40px;
`;
const H1 = styled.h1`
  color: #333;
`;

export default styled(Biography)`
  .punch-list :first-child {
    margin-top: 0;
  }
  .punch-list {
    margin: inherit 40px;
  }
  .logo {
    width: auto;
    height: 60%;
  }
  .inactive {
    opacity: 0.7;
  }
  .active {
    text-decoration: underline;
  }

  .brands {
    width: 130px;
    height: 80px;
  }
  .brand-group {
    justify-content: space-around;
    align-items: center;
    display: flex;
    padding: 0;
  }
`;

