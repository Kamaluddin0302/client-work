import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

import RecentOrders from '../../containers/dashboards/RecentOrders';

import ShowInesrtionForm from '../../containers/form-validations/ShowInesrtionForm';



export default class ShowInsertPage extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12">
                <Breadcrumb heading="menu.show-insertion" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <p><IntlMessages id="menu.show-insertion"/></p>
              </Colxx>
            </Row>
            

          <Row>
            <Colxx lg="12" xl="6" className="mb-4">
              <ShowInesrtionForm/>
            </Colxx>

            <Colxx lg="12" xl="6" className="mb-4">
              <RecentOrders />
            </Colxx>
          </Row>
          
          </Fragment>
          
        )
    }
}
