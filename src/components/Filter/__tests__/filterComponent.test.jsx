import React from 'react';
import ReactDOM from 'react-dom';
import FilterComponent from '../FilterComponent';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';


describe('<FilterComponent/>', () => {
    it("Renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<FilterComponent/>, div);
    });
    it('matches snapshot', () => {
        const tree = renderer.create(<FilterComponent/>).toJSON;
        expect(tree).toMatchSnapshot();
    })
});