import React from 'react';
import HornedBeast from './HornedBeast';
import CardDeck from 'react-bootstrap/CardDeck';

class Main extends React.Component {
  render() {
    return (
      <>
        <CardDeck>
          {this.props.beasts.map((thisBeast, index) => {
            return (
              <div key={index}>
                <HornedBeast
                  index={index}
                  showModal={this.props.showModal}
                  title={thisBeast.title}
                  pic={thisBeast.image_url}
                  description={thisBeast.description}
                />
              </div>
            )
          })}
        </CardDeck>
      </>
    )
  }
}

export default Main;
