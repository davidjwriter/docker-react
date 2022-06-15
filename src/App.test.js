import { render, screen } from '@testing-library/react';
import App from './App';

test('HOWDY', () => {
  render(<App />);
  const linkElement = screen.getByText(/Travis/i);
  expect(linkElement).toBeInTheDocument();
});

test('HACKED', () => {
  render(<App />);
  const linkElement = screen.getByText(/awesome/i);
  expect(linkElement).toBeInTheDocument();
});
