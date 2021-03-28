import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteBeasts: 0
        }
    }

    numOfClicks = () => {
        this.setState({ favoriteBeasts: this.state.favoriteBeasts + 1 });
        this.props.showModal(this.props.index);
    }

    render() {
        return (
            <>
                <Card
                    style={{ width: '16rem' }}
                    onClick={this.numOfClicks}
                    border="primary">
                    <Card.Img variant="top" src={this.props.pic} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            💜 = {this.state.favoriteBeasts}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default HornedBeast;
