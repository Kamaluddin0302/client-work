import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

import UserCardExamples from "../../containers/ui/UserCardExamples";

import ChannelProfileForm from '../../containers/form-validations/ChannelProfileForm';



export default class ChannelProfile extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12">
                <Breadcrumb heading="menu.channel-profile" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>
            
            

          <Row>
            <Colxx lg="12" xl="6" className="mb-4">
              <ChannelProfileForm/>
            </Colxx>

            <Colxx lg="12" xl="6" className="mb-4">
              <UserCardExamples />
            </Colxx>
          </Row>
          
          </Fragment>
          
        )
    }
}
