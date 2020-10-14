import React from 'react';
import { shallow } from 'enzyme';
import { Typography } from './Typography';

it('renders without crashing', () => {
    shallow(<Typography />);
});

describe('Typography Component', () => {

    let props;
    beforeEach(() => {
        props = {
            children: 'children props value',
            component: 'section',
            variant: 'variant'
        }
    })

    it('Should contain a value children props value', () => {
        const wrapper = shallow(<Typography>{props.children}</Typography>);
        expect(wrapper.html()).toContain("children props value");
    })

    it('Should contain a element section', () => {
        const wrapper = shallow(<Typography component={props.component}>{props.children}</Typography>);
        expect(wrapper.html()).toContain("section");
    })

    it('Should contain a value Typography_container--variant', () => {
        const wrapper = shallow(<Typography variant={props.variant}>{props.children}</Typography>);
        expect(wrapper.html()).toContain("Typography_container--variant");
    })
});