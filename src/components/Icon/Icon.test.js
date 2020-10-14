
import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from "./";

describe("Test Component", () => {
    let props;

    beforeEach(() => {
        props = {
            type: "FlecheFleche"
        }
    });

    it('renders without crashing', () => {
        shallow(<Icon {...props} />);
    });

    it('Should contain a value FlecheFleche', () => {
        const wrapper = shallow(<Icon {...props} />);
        expect(wrapper.html()).toContain("FlecheFleche");

    })
});