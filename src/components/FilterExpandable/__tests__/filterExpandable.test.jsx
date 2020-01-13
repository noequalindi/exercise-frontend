import React from 'react';
import ReactDOM from 'react-dom';
import FilterExpandable from '../FilterExpandable';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';


describe('<FilterExpandable/>', () => {
    it("Renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<FilterExpandable/>, div);
    });
    it('matches snapshot', () => {
        const tree = renderer.create(<FilterExpandable/>).toJSON;
        expect(tree).toMatchSnapshot();
    })
});
