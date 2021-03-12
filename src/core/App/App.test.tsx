import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should contain header component', () => {
    render(<App />);
    const header = document.getElementsByClassName('header')[0];
    expect(header).toBeInTheDocument();
  });
});
