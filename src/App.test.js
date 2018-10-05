import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './setUpTests.js';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

it('loads text after button is clicked', () => {
  const buttonWrapper = shallow(<button/>)
  const wrapper = shallow(<App/>)

  const text = 'Happiness is an excellent continuous integration and delivery platform!';

  wrapper.find('#button1').simulate('click');
  expect(wrapper.state().value).toEqual(text);
});
