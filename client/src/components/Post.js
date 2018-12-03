import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';

const Post = (props) => (
    <div>
    <Card>
        <CardBody>
          <CardTitle>Title: {props.title}</CardTitle> <br/>
          <CardSubtitle>To: {props.to}</CardSubtitle> <br/>
          <CardSubtitle>From: {props.from}</CardSubtitle> <br/>
          <CardText>{props.message}</CardText>
        </CardBody>
      </Card>
    </div>
)

export default Post;
