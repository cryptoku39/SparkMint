// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SparkMint title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SparkMint/i);
    expect(titleElement).toBeInTheDocument();
});
