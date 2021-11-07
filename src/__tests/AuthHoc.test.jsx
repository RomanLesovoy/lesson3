import React from 'react';
import {shallow, configure} from 'enzyme';
import AuthHoc from "../hoc/Auth";
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});
test('AuthHoc', () => {
    // Render a checkbox with label in the document
    const authHoc = shallow(
        <AuthHoc isAuthenticated={true}>
            <p>Success</p>
        </AuthHoc>
    );

    expect(authHoc.text()).toEqual('Success');

    const _authHoc = shallow(
        <AuthHoc isAuthenticated={false}>
            <p>Success</p>
        </AuthHoc>
    );

    expect(authHoc.text()).toEqual('');
});