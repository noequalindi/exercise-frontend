import React from 'react';
import ReactDOM from 'react-dom';
import Home from './../Home.jsx';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';

describe('<Home/>', () => {
    it("Renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Home/>, div);
    });
    
    it("Renders Home filters included Correctly", () => {
        const { getByTestId } = render(<Home/>);
        expect(getByTestId('filterContainer')).toHaveTextContent('Filtros')
    });

    it('render logo defined on Home', () => {
        const { getByAltText } = render(<Home/>);
        expect(getByAltText('logoBrand')).toBeDefined();
    });
    it('renders div of all components is defined', () => {
        const { getAllByTestId } = render(<Home/>);
        expect( getAllByTestId('allComponents')).toBeDefined();
    });
    it('matches snapshot', () => {
        const tree = renderer.create(<Home/>).toJSON;
        expect(tree).toMatchSnapshot();
    })
})
   

