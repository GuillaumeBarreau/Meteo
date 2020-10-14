
import React from 'react';
import { shallow } from 'enzyme';
import Meteo from "./Meteo";

describe("Meteo Component", () => {
    let props;

    beforeEach(() => {
        props = {
            loading: true,
        }
    });

    it('renders without crashing', () => {
        shallow(<Meteo {...props} />);
    });

    it('Should contain a value FlecheFleche', () => {
        const wrapper = shallow(<Meteo {...props} />);
        expect(wrapper.html()).toContain("FlecheFleche");
    })
});