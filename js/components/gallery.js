import React from 'react';

import Image from './image';

export default function Gallery(props) {
	console.log(props);
    const images = props.images.map((image, index) =>
        <Image url={image.url} description={image.description} key={index}/>
    );

    return (
        <div className="gallery">{images}</div>
    );
}