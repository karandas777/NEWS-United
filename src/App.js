import React, { Component } from 'react';
import Home from './component/Home';

import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './component/Header';
import Gsmarena from './component/Gsmarena';
import Footer from './component/Footer';
import Timesofindia from './component/Timesofindia';
import Bbcnews from './component/Bbcnews';
import Abcnews from './component/Abcnews';
import Cnbc from './component/Cnbc';
import Businessinsider from './component/Businessinsider';
import Cnn from './component/Cnn';
import Googlenews from './component/Googlenews';
import Natgeo from './component/Natgeo';
import Nfl from "./component/Nfl";
import Thehindu from './component/Thehindu';
import Wsj from './component/Wsj';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header/>
          <div className="container-fluid px-1">
            <Route exact path="/" component={Home} />
            <Route exact path="/gsmarena" component={Gsmarena} />
            <Route exact path="/timesofindia" component={Timesofindia} />
            <Route exact path="/bbcnews" component={Bbcnews} />
            <Route exact path="/abcnews" component={Abcnews} />
            <Route exact path="/cnbc" component={Cnbc} />
            <Route exact path="/businessinsider" component={Businessinsider} />
            <Route exact path="/cnn" component={Cnn} />
            <Route exact path="/googlenews" component={Googlenews} />
            <Route exact path="/natgeo" component={Natgeo} />
            <Route exact path="/nfl" component={Nfl} />
            <Route exact path="/thehindu" component={Thehindu} />
            <Route exact path="/wsj" component={Wsj} />
          </div>
          <Footer/>
        </Router>
      </Provider>
    )
  }
}
