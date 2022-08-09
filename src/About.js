import { Component } from "react";
import { Card } from 'react-bootstrap'

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./img/myProfile.jpg' />
      <Card.Body>
        <Card.Title>Suhaib alnaji</Card.Title>
        <Card.Text>
          Software developer
        </Card.Text>
      </Card.Body>
    </Card>
  }
};

export default Profile;