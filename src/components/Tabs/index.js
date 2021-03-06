import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './index.styl'
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
        className={styles['tabs-root']}
        onSelect={this.handleSelect}
        selectedIndex={0}
      >

        <TabList className={styles.tablist}>
          <Tab className={styles.tab}>Foo</Tab>
          <Tab className={styles.tab}>Bar</Tab>
          <Tab className={styles.tab}>Baz</Tab>
        </TabList>

        <TabPanel className={styles.tabpanel}>
          <NavBar goBack={goBack} hasBack={hasBack}></NavBar>
          <Button modifier="large" onClick={() => push('/a/137/ysq')}>
            Go to A
          </Button>
          <Button modifier="large" onClick={() => push('/b')}>
            Go to B
          </Button>
          <p>{text}</p>
        </TabPanel>
        <TabPanel className={styles.tabpanel}>
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel className={styles.tabpanel}>
          <h2>Hello from Baz</h2>
        </TabPanel>
      </Tabs>
    );
  }
}
