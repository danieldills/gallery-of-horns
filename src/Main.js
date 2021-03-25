import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.beasts.map((thisBeast, index) => {
                        return (
                            <div key={index}>
                                <HornedBeast
                                    title={thisBeast.title}
                                    pic={thisBeast.image_url}
                                    description={thisBeast.description}
                                />
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default Main;
