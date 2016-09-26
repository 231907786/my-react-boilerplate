import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './index.css'
import NavBar from '../NavBar'
import { Button } from 'react-onsenui'

export default class TabExample extends Component {

  constructor(props) {
    super(props)
    Tabs.setUseDefaultStyles(false);
  }

  componentDidMount() {
    this.props.fetching()
  }

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    const {
      goBack,
      hasBack,
      push,
      text,
    } = this.props
    return (
      <Tabs
        className="tabs-root"
        onSelect={this.handleSelect}
        selectedIndex={0}
      >

        <TabList className="tablist">
          <Tab className="tab">Foo</Tab>
          <Tab className="tab">Bar</Tab>
          <Tab className="tab">Baz</Tab>
        </TabList>

        <TabPanel className="tabpanel">
          <NavBar goBack={goBack} hasBack={hasBack}></NavBar>
          <Button modifier="large" onClick={() => push('/a/137/ysq')}>
            Go to A
          </Button>
          <Button modifier="large" onClick={() => push('/b')}>
            Go to B
          </Button>
          <p>{text}</p>
        </TabPanel>
        <TabPanel className="tabpanel">
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel className="tabpanel">
          <h2>Hello from Baz</h2>
        </TabPanel>
      </Tabs>
    );
  }
}
