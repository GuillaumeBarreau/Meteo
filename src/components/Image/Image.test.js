
import React from 'react';
import { shallow } from 'enzyme';
import { Image } from ".";

describe("Image Component", () => {
    let props;

    beforeEach(() => {
        props = {
            type: "Clouds"
        }
    });

    it('renders without crashing', () => {
        shallow(<Image {...props} />);
    });

    it('Should contain a value FlecheFleche', () => {
        const wrapper = shallow(<Image {...props} />);
        expect(wrapper.html()).toContain("Clouds");

    })
});