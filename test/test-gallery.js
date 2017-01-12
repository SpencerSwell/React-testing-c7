import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery'; 

describe('Gallery component', function() {

it('Displays a few different images', function() {

const url = 'http://www.lovethispic.com/uploaded_images/35108-Pretty-Halloween-Bokeh.jpg';
const desc = 'pretty picture';

const renderer = TestUtils.createRenderer();

renderer.render(<Gallery images= {[{url:"http://www.lovethispic.com/uploaded_images/35108-Pretty-Halloween-Bokeh.jpg", desc:"pretty picture"}]}/>);

const result = renderer.getRenderOutput();
result.props.className.should.equal('gallery');
result.props.images.url.should.equal(url);
result.props.images.desc.should.equal(desc);

console.log(result.props);

})






})