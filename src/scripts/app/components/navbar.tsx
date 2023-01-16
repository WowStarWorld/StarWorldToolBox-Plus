import React from "react";

import {
    MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem,
    MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler
} from "mdb-react-ui-kit";

import * as config from "../config";

export interface NavbarProps {
    appid: string;
}

export interface NavbarStates {
    showNavbarBasic: boolean;
}

export class AppNavbar extends React.Component<NavbarProps, NavbarStates> {

    constructor (props) {
        super(props);
        this.state = { showNavbarBasic: false };
    }

    render() {
        return (
          <MDBNavbar expand="lg" light bgColor="light" id={`${this.props.appid}-navbar`} sticky>
              <MDBContainer>
                  <MDBNavbarBrand href="/">{config.getStorageItem("general.title", "StarWorld 工具箱")}&nbsp;</MDBNavbarBrand>
                  <MDBNavbarToggler onClick={() => this.setState({ showNavbarBasic: !this.state.showNavbarBasic })}>
                      <MDBIcon icon="bars" fas />
                  </MDBNavbarToggler>
                  <MDBCollapse navbar show={this.state.showNavbarBasic}>
                      <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                          <MDBNavbarItem>
                              <MDBNavbarLink href="/"><MDBIcon icon="house"/> 主页</MDBNavbarLink>
                          </MDBNavbarItem>
                      </MDBNavbarNav>
                  </MDBCollapse>
              </MDBContainer>
          </MDBNavbar>
        );
    }
}

export default AppNavbar;
