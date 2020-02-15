import React, { Component } from "react";
import DatePickerExamples from "../forms/DatePickerExamples";
import ReplayTimePicker from "../forms/ReplayTimePicker";
import TagsInputExample from "../forms/TagsInputExample";

import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox
} from "availity-reactstrap-validation";
import { Button, Label, Card, CardBody, InputGroup, CustomInput, InputGroupAddon } from "reactstrap";



class ShowInesrtionForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, errors, values) {
    console.log(errors);
    console.log(values);
    if (errors.length === 0) {
      //submit
    }
  }

  render() {
    
    return (
      <Card className="mb-5">
        <CardBody>
          <h6 className="mb-4">Insert all show info here</h6>
          <AvForm
            className="av-tooltip tooltip-label-right"
            onSubmit={this.handleSubmit}>
            
            <AvGroup>
              <Label>Show Title</Label>
              <AvInput name="show title" required />
              <AvFeedback>Title is required!</AvFeedback>
            </AvGroup>

            <AvField
              type="select"
              name="select"
              required
              label="Genre"
              errorMessage="Please select an option!">
              <option value="0" />
              <option>Documentary</option>
              <option>Movie</option>
              <option>Talk Show</option>
              <option>News</option>
              <option>Serie</option>
              <option>Sport</option>
            </AvField>

            <AvField
              type="select"
              name="select"
              required
              label="Transmission"
              errorMessage="Please select an option!">
              <option value="0" />
              <option>Live</option>
              <option>Pre-Recorded</option>
             
            </AvField>

            <AvField
              type="select"
              name="select"
              required
              label="Main Language"
              errorMessage="Please select an option!">
              <option value="0" />
              <option>Arabic</option>
              <option>English</option>
              <option>Frensh</option>
              <option>Spanish</option>
              <option>Chinees</option>
            </AvField>

            <AvField
              type="select"
              name="select"
              required
              label="Subtitle"
              errorMessage="Please select an option!">
              <option value="1" />
              <option>Not Availble</option>
              <option>Arabic</option>
              <option>English</option>
              <option>Frensh</option>
              <option>Spanish</option>
              <option>Chinees</option>
            </AvField>

            <AvGroup>
              <Label>Show description</Label>
              <AvInput type="textarea" name="details" id="details" required />
              <AvFeedback>Please enter show description!</AvFeedback>
            </AvGroup>

            <AvGroup>
            <DatePickerExamples/>
            <ReplayTimePicker/> 
            <TagsInputExample/> 
            </AvGroup>
            

            <InputGroup className="mb-3">
              <InputGroupAddon addonType="prepend">Upload cover</InputGroupAddon>
              <CustomInput
                    type="file"
                    id="exampleCustomFileBrowser1"
                    name="customFile"
              />
            </InputGroup>

            
            <Button color="primary">Submit</Button>
          </AvForm>
        </CardBody>
      </Card>
    );
  }
}

export default ShowInesrtionForm;
