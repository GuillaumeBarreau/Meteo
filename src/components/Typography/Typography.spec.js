import React from 'react';
import { shallow } from 'enzyme';
import { Container } from './';

it('renders without crashing', () => {
    shallow(<Container />);
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
        const wrapper = shallow(<Container>{props.children}</Container>);
        expect(wrapper.html()).toContain("children props value");
    })

    it('Should contain a element section', () => {
        const wrapper = shallow(<Container component={props.component}>{props.children}</Container>);
        expect(wrapper.html()).toContain("section");
    })

    it('Should contain a value Typography_container--variant', () => {
        const wrapper = shallow(<Container variant={props.variant}>{props.children}</Container>);
        expect(wrapper.html()).toContain("Typography_container--variant");
    })
});