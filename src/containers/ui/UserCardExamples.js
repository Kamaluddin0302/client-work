import React from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";

import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";
import ThumbnailImage from "../../components/cards/ThumbnailImage"
import ThumbnailLetters from "../../components/cards/ThumbnailLetters"

const UserCardExamples = () => {
  return (
         
    <Row>
    <Colxx xxs="12">
      <CardTitle className="mb-4"><IntlMessages id="cards.user-card" /></CardTitle>
      <Row>
        <Colxx md="6" sm="6" lg="12" xxs="12">
          <Card className="mb-4">
            <CardBody>
              <div className="text-center">
                <CardImg top src="/assets/img/profile-pic-l.png" alt="Card image cap" className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail" />
                <NavLink to="/app/ui/cards">
                  <CardSubtitle className="mb-1">MBC 2</CardSubtitle>
                </NavLink>
                <CardText className="text-muted text-small mb-4">The Home Of Movie</CardText>
                <Button outline size="sm" color="primary">Edit</Button>
              </div>
            </CardBody>
          </Card>
        </Colxx>

      </Row>
    </Colxx>
  </Row>
  )
}

export default UserCardExamples
