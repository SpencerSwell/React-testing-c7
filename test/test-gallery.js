import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Image from '../js/components/image';
import Gallery from '../js/components/gallery'; 

describe('Gallery component', function() {

it('Displays a few different images', function() {

const url = 'http://www.lovethispic.com/uploaded_images/35108-Pretty-Halloween-Bokeh.jpg';
const desc = 'pretty picture';

const renderer = TestUtils.createRenderer();

renderer.render(<Gallery images= {[{url:"http://www.lovethispic.com/uploaded_images/35108-Pretty-Halloween-Bokeh.jpg", description:"pretty picture"}]}/>);
const result = renderer.getRenderOutput();
result.props.className.should.equal('gallery');
result.props.children[0].props.url.should.equal(url);
result.props.children[0].props.description.should.equal(desc);
result.props.children[0].type.should.equal(Image);
result.props.children.length.should.equal(1);



})






})