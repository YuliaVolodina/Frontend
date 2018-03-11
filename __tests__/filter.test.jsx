import React from 'react';
import Problems from '../src/js/pages/Problems.jsx';
import renderer from 'react-test-renderer';

test('Problems page information correct',() =>{
	const component = renderer.create(
 		<Problems />,
	);
	let tree = component.toJSON();
 	expect(tree).toMatchSnapshot();
})
