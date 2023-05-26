import React, { Component } from 'react';
import { images } from './picture';

class Leaders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            imageSources: [
                images.nkrumah, 
                images.william,
                images.adjei,
                images.addo,
                images.danquah,
                images.obtestebi
            ],
        };
    }

    imageChange = (e) => {
        e.preventDefault()
        const { currentImageIndex, imageSources } = this.state;
        const nextImageIndex = (currentImageIndex + 1) % imageSources.length;
        this.setState({ currentImageIndex: nextImageIndex });
    };

    render() {
        const { currentImageIndex, imageSources } = this.state;
        const currentImage = imageSources[currentImageIndex];

        return (
            <div>
                <p className='text'>THE BIG SIX IN GHANA</p>
                <img src={currentImage} alt="Leader" />
                <br/>
                <button onClick={this.imageChange} className='here'>See More</button>
            </div>
        );
    }
}

export default Leaders;
