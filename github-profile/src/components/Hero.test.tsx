import { describe, expect, it, vi } from 'vitest';
import HeroSection from './Hero';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockProps = {
  search: '',
  setSearch: vi.fn(),
  fetchAll: vi.fn(),
  userProfile: null,
  isLoading: false,
  error: null
}

describe('Hero Component', () => {
  it('should render the input textbox', () => {
    render(<HeroSection {...mockProps} />)
    expect(
      screen.getByPlaceholderText('Search GitHub username...')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox')
    ).toBeInTheDocument()
  });

  it('should call setSearch when user types', async() => {
    render(<HeroSection {...mockProps}/>);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'r');
    expect(
      mockProps.setSearch
    ).toHaveBeenCalled();
  });

  it('should call fetchAll when user types username and press enter', async() => {
    render(<HeroSection {...mockProps} search='rahul'/>);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '{enter}');
    expect(
      mockProps.setSearch
    ).toHaveBeenCalledTimes(1);
  });
});