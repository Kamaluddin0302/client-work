import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';


const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);

const FullSchedule = React.lazy(() =>
  import(/* webpackChunkName: "menu" */ './fullschedule')
);

const ShowInsertPage = React.lazy(() =>
  import(/* webpackChunkName: "show-insertion-page" */ './show-insertion-page')
);

const ChannelProfile = React.lazy(() =>
  import(/* webpackChunkName: "show-insertion-page" */ './channel-profile')
);

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/dashboards`}
              />
              <Route
                path={`${match.url}/dashboards`}
                render={props => <Dashboards {...props} />}
              />
              <Route
                path={`${match.url}/applications`}
                render={props => <Applications {...props} />}
              />
              <Route
                path={`${match.url}/fullschedule`}
                render={props => <FullSchedule {...props} />}
              />
              
              <Route
                path={`${match.url}/channel-profile`}
                render={props => <ChannelProfile {...props} />}
              />
              <Route
                path={`${match.url}/show-insertion-page`}
                render={props => <ShowInsertPage {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
