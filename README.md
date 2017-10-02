# Simple Iframe React Component

[![License](https://img.shields.io/github/license/ihsansatriawan/react-simple-iframe.svg?maxAge=3600)](https://github.com/ihsansatriawan/react-simple-iframe) 
[![version](https://img.shields.io/npm/v/react-simple-iframe.svg)](https://www.npmjs.com/package/react-simple-iframe)
[![downloads monthly](https://img.shields.io/npm/dm/react-simple-iframe.svg)](https://www.npmjs.com/package/react-simple-iframe) 
[![downloads](https://img.shields.io/npm/dt/react-simple-iframe.svg)](https://www.npmjs.com/package/react-simple-iframe) 

Simple react component to embeded iframed page and give a callback when completed load content

## Install

```
npm install react-simple-iframe
OR
yarn add react-simple-iframe
```

## Usage
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Iframe from 'react-simple-iframe'

class App extends Component {
  state = {
    iframeLoaded: false
  }

  handleLoadedIframe = () => {
    this.setState({ iframeLoaded: true })
  }

  render() {
    const { iframeLoaded } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { !iframeLoaded && <p>LOADING....</p> }
        <Iframe
          src='https://www.google.com'
          frameBorder='0'
          onLoaded={this.handleLoadedIframe}
        />
      </div>
    );
  }
}

export default App;
```

## Properties

You can pass all standard properties `<iframe />` but this component provide additional properties:

**onLoaded** - *function* 

## License

MIT. Copyright Ihsan Satriawan, and other contributors.
