import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: "tentang" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="tentang"
            active={activeItem === "tentang"}
            onClick={this.handleItemClick}>
          />
          <Menu.Item
            name="konten"
            active={activeItem === "konten"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="persyaratan"
            active={activeItem === "persyaratan"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="ulasan"
            active={activeItem === "ulasan"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
