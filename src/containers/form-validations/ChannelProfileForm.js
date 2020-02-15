import React, { Component } from "react";
import DropzoneExample from "../forms/DropzoneExample";
import { connect } from "react-redux";
import { addChannelProfile,getChannelProfile } from "../../redux/actions";
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
import { Button, Label, Card, CardBody, CardTitle,InputGroup, CustomInput,
  InputGroupAddon,
  Input
} from "reactstrap";



class ChannelProfileForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      youtubeLink:"",
      instagramLink:"",
      facebookLink:""
    }
  }

  componentDidMount(){
    this.props.getChannelProfile()
  }

  handleSubmit(event, errors, values) {
    values.facebookLink= this.state.facebookLink
    values.instagramLink= this.state.instagramLink
    values.youtubeLink= this.state.youtubeLink
    
    this.props.addChannelProfile(values)
    if (errors.length === 0) {
    }
  }

  render() {
    
    return (
      <Card className="mb-5">
        <CardBody>
          <h6 className="mb-4">Basic</h6>
          <AvForm
            className="av-tooltip tooltip-label-right"
            onSubmit={this.handleSubmit}>
            
            <AvGroup>
              <Label>Channel Name</Label>
              <AvInput name="Channel name" required />
              <AvFeedback>Channel name is required!</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label>Channel Slogan</Label>
              <AvInput name="Channel Slogan"  />
            </AvGroup>

            <AvGroup>
            <AvField
              type="select"
              name="Genre"
              required
              label="Genre"
              errorMessage="Please select an option!">
              <option value="0" />
              <option>Entertainment</option>
              <option>Documentary</option>
              <option>News</option>
              <option>Movie & Series</option>
              <option>Sport</option>
              <option>Relegious</option>
              <option>Kids & Cartoon</option>
              <option>Cocking</option>
            </AvField>
            </AvGroup>

            <AvGroup>
            <AvField
              type="select"
              name="Main Language"
              required
              label="Main Language"
              errorMessage="Please select an option!">
              <option value="0" />
              <option>Arabic</option>
              <option>English</option>
              <option>Frensh</option>
              <option>Spanish</option>
              <option>Chinees</option>
              <option>Italien</option>
            </AvField>
            </AvGroup>

            <AvGroup>
            <AvField
              type="select"
              name="HQ Country"
              required
              label="HQ Country"
              errorMessage="Please select an option!">
              <option value="0" />
              <option>Algeria</option>
              <option>Estonia</option>
              <option>England</option>
              <option>Egypte</option>
              <option>France</option>
              <option>Spain</option>
              <option>Italy</option>
              <option>Tunisia</option>
              <option>Lebenon</option>
              <option>USA</option>
              <option>Turkey</option>
              <option>Saudi Arbia</option>
            </AvField>
            </AvGroup>
            <AvGroup>
            <AvField
              type="select"
              name="Broadcast Region"
              required
              label="Broadcast Region"
              errorMessage="Please select an option!">
              <option value="0" />
              <option>Europe</option>
              <option>MENA</option>
              <option>ASIA</option>
              <option>USA & Canada</option>
              <option>Australia</option>
              <option>South America</option>
              <option>Other</option>
            </AvField>
            </AvGroup>
            <AvGroup>
                <InputGroup  className="mb-3">
                  <InputGroupAddon addonType="prepend">Youtube</InputGroupAddon>
                  <Input  onChange={(e)=>this.setState({
                    youtubeLink:e.target.value
                  })}  placeholder="youtube channel link" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">Instagram</InputGroupAddon>
                  <Input onChange={(e)=>this.setState({
                    instagramLink:e.target.value
                  })} placeholder="instagram channel link" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroupAddon   addonType="prepend">Facebook</InputGroupAddon>
                  <Input onChange={(e)=>this.setState({
                    facebookLink:e.target.value
                  })} placeholder="facebook channel link" />
                </InputGroup>
            </AvGroup>

            <AvGroup>
              <Label>Channel description</Label>
              <AvInput type="textarea" name="details" id="details" required />
              <AvFeedback>Please enter channel description!</AvFeedback>
            </AvGroup>

                
               <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">Upload Logo</InputGroupAddon>
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

const mapStateToProps = ({ todoApp }) => {
  return {
    todoApp
  };
};
const mapDispatchToProps = dispatch =>{
  return {
    addChannelProfile: (data) => dispatch(addChannelProfile(data)),
    getChannelProfile: () => dispatch(getChannelProfile())
  }
}
export default connect(
  mapStateToProps,mapDispatchToProps
)(ChannelProfileForm);

