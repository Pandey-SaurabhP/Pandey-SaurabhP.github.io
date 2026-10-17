import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Projects from './components/projects';

test('renders the Classic portfolio with screenshot stacks and illustrated covers', () => {
  const { container } = render(<><Header /><Projects /></>);
  expect(screen.getByRole('heading', { level: 1, name: /Saurabh Pandey/ })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  expect(container.querySelectorAll('.project-card')).toHaveLength(6);
  expect(container.querySelectorAll('.project-cover')).toHaveLength(6);
  expect(container.querySelectorAll('.screenshot-stack')).toHaveLength(2);
  expect(container.querySelectorAll('.stack-shot')).toHaveLength(6);
  expect(container.querySelectorAll('.project-cover:not(.screenshot-stack) img')).toHaveLength(3);
  expect(screen.getByRole('img', { name: /GAN-Sight: image translation/ })).toBeInTheDocument();
  expect(container.querySelector('.project-screenshots')).not.toBeInTheDocument();
});
