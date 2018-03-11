import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Problems from '../src/js/pages/Problems.jsx';
import { shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

//tslint:disable-next-line:no-any
(enzyme).configure({ adapter: new Adapter() });

it('filtered expert correctly', () =>{
	const component = shallow(<Problems />);
	component.setState({selectedOption: 'Expert'});
	expect(component.find(Problems).length).toBe(1);
});
