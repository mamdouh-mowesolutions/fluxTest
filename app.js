import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './views/page1';
import PageTwo from './views/page2';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}