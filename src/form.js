import React from 'react';
import { Container } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class Form extends React.Component {

    render() {
        return(
            <Container>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Search by Number of Horns</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>100</option>
                            <option>All</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default Form;
