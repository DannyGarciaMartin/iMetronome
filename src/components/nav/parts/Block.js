import React from 'react';
import styled from 'styled-components';

// This component expands to the full width of its container
export class Block extends React.Component {

  render() {
    let width = "100%";
    let height = this.props.height || "auto";
    if (this.props.orientation === "v") {
      height = "100%";
      width = this.props.width || "auto";
    }
    return(
      <div className={this.props.className + " " + "block"} style={
        {
          width: width,
          height: height,
          background: this.props.background
        }
      }>
        {this.props.children}
      </div>
    );
  }

};
Block.defaultProps = {
  orientation: "v", // "v" for vertical, "h" for horizontal
  background: "#3A407F",
};

export default styled(Block)`
  .block {
    height: ${props => props.orientation === "v" ? "100%" : "initial"};
    width: ${props => props.orientation === "h" ? "100%" : "initial"};
  }
`;
