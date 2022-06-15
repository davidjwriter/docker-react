import { render, screen } from '@testing-library/react';
import App from './App';

test('HOWDY', () => {
  render(<App />);
  const linkElement = screen.getByText(/howdy/i);
  expect(linkElement).toBeInTheDocument();
});

test('HACKED', () => {
  render(<App />);
  const linkElement = screen.getByText(/HACKED/i);
  expect(linkElement).toBeInTheDocument();
});
