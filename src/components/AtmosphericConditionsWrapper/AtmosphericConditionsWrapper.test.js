
import React from 'react';
import { shallow } from 'enzyme';
import { AtmosphericConditionsWrapper } from "./AtmosphericConditionsWrapper";



describe("AtmosphericConditionsWrapper Component", () => {
    let props;

    beforeEach(() => {
        props = {
            AtmosphericConditions: [
                {
                    value: 42,
                    description: "description_01",
                    icon: "FlecheFleche",
                    unit: "unit_01"
                },
                {
                    value: 42,
                    description: "description_02",
                    icon: "FlecheFleche",
                    unit: "unit_02"
                }
            ]
        }
    });

    it('renders without crashing', () => {
        shallow(<AtmosphericConditionsWrapper {...props} />);
    });

    it('Should contain a values atmosphericCondition[0]', () => {
        const wrapper = shallow(<AtmosphericConditionsWrapper {...props} />);
        expect(wrapper.html()).toContain("description_01");
        expect(wrapper.html()).toContain(42);
        expect(wrapper.html()).toContain("unit_01");
    })
});