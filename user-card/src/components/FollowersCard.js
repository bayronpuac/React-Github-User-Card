import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle
} from 'reactstrap';

const FollowersCard = ({follower}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{follower.login}</CardTitle>
        </CardBody>
        <CardImg style={{ width: 300, height: 300 }} src={follower.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardText>{follower.bio}</CardText>
          <CardLink href={follower.html_url}>Here is my work</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default FollowersCard;