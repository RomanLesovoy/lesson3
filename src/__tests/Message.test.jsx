import React from 'react';
import {shallow, configure} from 'enzyme';
import Message from "../components/Message";
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});
test('Message changes the text after click', () => {
    // Render a checkbox with label in the document
    const message = shallow(<Message />);

    expect(message.text()).toEqual('Hidden');
    message.find('button').simulate('click');

    expect(message.text()).toEqual('Shown');
});