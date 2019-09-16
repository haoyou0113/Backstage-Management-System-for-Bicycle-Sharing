import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Uibutton from './pages/ui/button';
import Nomatch from './pages/ui/nomatch';
export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path='/login' component={Login} />
          <Route
            path='/admin'
            render={() => (
              <Admin>
                <Switch>
                  {/* <Route path="/home" component={Home} /> */}
                  <Route path='/admin/ui/buttons' component={Uibutton} />
                  {/* <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tabs} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/reg" component={FormRegister} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={HighTable} />
                                    <Route path="/city" component={City} />
                                    <Route path="/order" component={Order} />
                                    <Route path="/user" component={User} />
                                    <Route path="/bikeMap" component={BikeMap} />
                                    <Route path="/charts/bar" component={Bar} />
                                    <Route path="/charts/pie" component={Pie} />
                                    <Route path="/charts/line" component={Line} />
                                    <Route path="/rich" component={RichText} />
                                    <Route path="/permission" component={Permission} />
                                    <Redirect to="/home" /> */}
                  <Route component={Nomatch} />
                </Switch>
              </Admin>
            )}
          />
          {/* <Route path='/order/detail' component={Admin} /> */}
        </App>
      </HashRouter>
    );
  }
}
