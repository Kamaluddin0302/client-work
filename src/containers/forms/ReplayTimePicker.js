import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Row, Card, CardBody, CardTitle } from "reactstrap";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";

class ReplayTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      startDateTime: null,
      startDateRange: null,
      endDateRange: null,
      embeddedDate: moment()
    };
  }
  handleChangeEmbedded = date => {
    this.setState({
      embeddedDate: date
    });
  };

  handleChangeDate = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeDateTime = date => {
    this.setState({
      startDateTime: date
    });
  };

  handleChangeStart = date => {
    this.setState({
      startDateRange: date
    });
  };

  handleChangeEnd = date => {
    this.setState({
      endDateRange: date
    });
  };

  render() {
    const { messages } = this.props.intl;

    return (
      <Row>
        <Colxx xxs="12" xl="8" className="mb-4">
              <label>
                <IntlMessages id="form-components.replay"/>
              </label>
              <DatePicker
                className="mb-5"
                selected={this.state.startDateTime}
                onChange={this.handleChangeDateTime}
                placeholderText={messages["forms.date"]}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
                timeCaption="Time" />
        </Colxx>
      </Row>
    );
  }
}
export default injectIntl(ReplayTimePicker);
 

