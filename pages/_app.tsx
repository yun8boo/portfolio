import React from "react";
import App from "next/app";
import styled from "styled-components";
import Nav from '../components/nav'
import GlobalStyle from '../styles/GlobalStyle';
// import context
import { ThemeContext } from '../context/ThemeContext';

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
    this.handleChangeTheme = this.handleChangeTheme.bind(this)
  }
  componentDidMount(){ 
    const theme = localStorage.getItem("theme")
    if(theme) {
      this.setState({theme})
    }else {
      this.setState({theme: 'light'})
    }
  }
  handleChangeTheme() {
    const { theme }: any = this.state
    if( theme === 'light') {
      this.setState({theme: 'dark'})
      localStorage.setItem("theme", 'dark')
    }else {
      this.setState({theme: 'light'})
      localStorage.setItem("theme", 'light')
    }
  }
  render() {
    const { theme }: any = this.state
    const { Component, pageProps } = this.props;
    return (
      <ThemeContext.Provider value={theme}>
        <GlobalStyle theme={theme} />
        <Nav onChange={this.handleChangeTheme} />
        <Container>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </Container>
      </ThemeContext.Provider>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 48px 10px;
  max-width: 480px;
`

const Wrapper = styled.div`
  width: 100%;
`