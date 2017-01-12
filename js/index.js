require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';

document.addEventListener('DOMContentLoaded', () => {

ReactDOM.render ( <Gallery images= {[{url:"http://www.lovethispic.com/uploaded_images/35108-Pretty-Halloween-Bokeh.jpg", desc:"pretty picture"}]}
	/>,

document.getElementById('app')

);
});

