import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SrcComponentsFooter from './SrcComponentsFooter';

describe('<SrcComponentsFooter />', () => {
  test('it should mount', () => {
    render(<SrcComponentsFooter />);
    
    const srcComponentsFooter = screen.getByTestId('SrcComponentsFooter');

    expect(srcComponentsFooter).toBeInTheDocument();
  });
});