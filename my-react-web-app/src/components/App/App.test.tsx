import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SrcComponentsApp from './SrcComponentsApp';

describe('<SrcComponentsApp />', () => {
  test('it should mount', () => {
    render(<SrcComponentsApp />);
    
    const srcComponentsApp = screen.getByTestId('SrcComponentsApp');

    expect(srcComponentsApp).toBeInTheDocument();
  });
});