// @flow

// import Footer from './components/footer';
import pink from 'material-ui/colors/blue';
import cyan from 'material-ui/colors/cyan';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import React, { PureComponent } from 'react';
import './App.css';
import Content from './components/content';
import Header from './components/header';
// import 'animate.css/animate.min.css';

type State = {
  loading : boolean
}

type Props = {}

export default class App extends PureComponent<Props, State> {
  state : State = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 0);
  }

  render() {
    const { loading } = this.state;
    if (loading) { // if your component doesn't have to wait for async data, remove this block
      return null; // render null when app is not ready
    }

    const theme = createMuiTheme({
      palette: {
        primary: cyan,
        accent: pink,
        type: 'light',
      },
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header />
          <Content />
        </div>
      </MuiThemeProvider>
    );
  }
}