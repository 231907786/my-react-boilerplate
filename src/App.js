import React, { Component } from 'react';
import 'isomorphic-fetch'
import './App.css';
import ons from 'onsenui'
import {
  Page,
  Toolbar,
  Button,
  Tabbar,
  TabPage,
  Tab,
  Navigator,
  BackButton,
} from 'react-onsenui'
import {Route} from 'react-router'


var App = React.createClass({
  renderToolbar: function(route, navigator) {
    const backButton = route.hasBackButton
      ? <BackButton onClick={this.handleClick.bind(this, navigator)}>Back</BackButton>
      : null;

    return (
      <Toolbar>
        <div className='left'>{backButton}</div>
        <div className='center'>{route.title}</div>
      </Toolbar>
    );
  },

  handleClick: function(navigator) {
    navigator.popPage();
  },

  pushPage: function(navigator) {
    const { onPush, count } = this.props
    navigator.pushPage({
      title: count,
      hasBackButton: true
    });

    onPush()
  },

  renderPage: function(route, navigator) {
    const Temp = () => (
      <Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
        <section style={{margin: '16px', textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this, navigator)}>
            Push Page
          </Button>
        </section>
      </Page>
    )
    return (
      <Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
        <section style={{margin: '16px', textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this, navigator)}>
            Push Page
          </Button>
        </section>
      </Page>
    );
  },

  render: function() {
    return (
      <Navigator
        renderPage={this.renderPage}
        initialRoute={{
          title: 'First page',
          hasBackButton: false
        }}
      />
    );
  }
});

export default App;
