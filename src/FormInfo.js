import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Data from './data.json';

class FormInfo extends React.Component {
    filter = (event) => {
        const numOfHorns = parseInt(event.target.value);
        let beastData = Data;
        if (numOfHorns) {
            beastData = Data.filter((beast) => beast.horns === numOfHorns);
        }
        this.props.filteredHorns(beastData)
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Search Beasts by Number of Horns</Form.Label>
                        <Form.Control as="select" onChange={this.filter}>
                            <option>Please select from the dropdown</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
};

export default FormInfo;
