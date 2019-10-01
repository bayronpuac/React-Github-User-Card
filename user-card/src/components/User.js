import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle
} from 'reactstrap';

const User = ({githubUser}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{githubUser.login}</CardTitle>
        </CardBody>
        <CardImg style={{ width: 300, height: 300 }} src={githubUser.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardText>{githubUser.bio}</CardText>
          <CardLink href={githubUser.html_url}>Here is my work</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default User;