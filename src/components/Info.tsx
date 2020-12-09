import { Link } from 'gatsby'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Info = () => {
    return (
        <Container fluid>
            <h1 className="display-4  font-weight-bold text-center">TITLE</h1>
  <Row>

    <Col md={8} sm={8} className="mx-auto text-center">
        <p className="lead text-muted mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto reprehenderit qui animi, cupiditate id dolor voluptates? Suscipit ducimus nesciunt dignissimos a ullam inventore, cumque impedit ratione corrupti quaerat eum fugit ex esse libero aspernatur voluptates? Laborum neque pariatur adipisci vel tempora. Doloremque, possimus at. Atque delectus deleniti iste omnis quisquam?</p>
        
    <Link to='/about'><Button  className="btn-color mb-4">ABOUT PAGE</Button></Link>
    </Col>
  </Row>
</Container>
    )
}

export default Info
