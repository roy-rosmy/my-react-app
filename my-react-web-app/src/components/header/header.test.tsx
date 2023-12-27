import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SrcComponentsHeader from './SrcComponentsHeader';

describe('<SrcComponentsHeader />', () => {
  test('it should mount', () => {
    render(<SrcComponentsHeader />);
    
    const srcComponentsHeader = screen.getByTestId('SrcComponentsHeader');

    expect(srcComponentsHeader).toBeInTheDocument();
  });
});