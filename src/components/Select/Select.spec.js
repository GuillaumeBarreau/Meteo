import React from 'react';
import { shallow } from 'enzyme';
import { Select } from '.';

it('renders without crashing', () => {
    shallow(<Select />);
});

describe('Select Component', () => {

    let props;
    beforeEach(() => {
        props = {
            children: 'children'
        }
    })

    it('Should contain a value children props value', () => {
        const wrapper = shallow(<Select>{props.children}</Select>);
        expect(wrapper.html()).toContain("children");
    })
});