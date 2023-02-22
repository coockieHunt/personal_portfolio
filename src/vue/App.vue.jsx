//package
import styled from "styled-components";
import React from "react";

//config
import { Layout } from "../config";

// layout
import GlobalStyle from '../GlobalStyle';

import {HeaderLayout} from "./layout/header.layout";
import {FooterLayout} from "./layout/footer.layout";

//style
const ContentContainer = styled.div`
  width: ${Layout.Width_content};
  margin: 0 auto;
`

export const AppVue = () => { 
  return (
    <React.Fragment>
      <GlobalStyle/>
      <HeaderLayout/>
      <ContentContainer>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
        <p>je suis le contenue</p>
      </ContentContainer>
      <FooterLayout/>
    </React.Fragment>
  );
    
}