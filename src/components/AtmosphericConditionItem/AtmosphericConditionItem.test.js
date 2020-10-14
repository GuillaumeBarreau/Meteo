
import React from 'react';
import { shallow } from 'enzyme';
import {AtmosphericConditionItem} from ".";

describe("AtmosphericConditionItem Component", () => {
    let props;

    beforeEach(() => {
        props = {
            atmosphericCondition: {
                value: 42,
                description: "description_01",
                icon: "FlecheFleche",
                unit: "unit_01"
            }
        }
    });

    it('renders without crashing', () => {
        shallow(<AtmosphericConditionItem {...props} />);
    });

    it('Should contain a values to atmosphericCondition attributes', () => {
        const wrapper = shallow(<AtmosphericConditionItem {...props} />);
        expect(wrapper.html()).toContain("description_01");
        expect(wrapper.html()).toContain("FlecheFleche");
        expect(wrapper.html()).toContain(42);
        expect(wrapper.html()).toContain("unit_01");
    })
});