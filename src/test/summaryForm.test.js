import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import SummaryForm from '../pages/summary/SummaryForm';

describe('tests of the summary form component', () => {
  test('should have a checkbox with text "I agree to terms and conditions"', () => {
    render(<SummaryForm />);

    const checkbok = screen.getByRole('checkbox', { name: /i agree to terms and conditions/i });
    expect(checkbok).toBeInTheDocument();
    expect(checkbok).not.toBeChecked();
  });

  test('confirm order button must be "disabled" if checkbox is not checked', () => {
    render(<SummaryForm />);

    const confirmOrderBtn = screen.getByRole('button', { name: /confirm order/i });
    expect(confirmOrderBtn).toBeDisabled();

    const checkbok = screen.getByRole('checkbox', { name: /i agree to terms and conditions/i });
    expect(checkbok).not.toBeChecked();
  });

  test('confirm order button must be "enabled" if checkbox is checked', () => {
    render(<SummaryForm />);

    const confirmOrderBtn = screen.getByRole('button', { name: /confirm order/i });

    const checkbok = screen.getByRole('checkbox', { name: /i agree to terms and conditions/i });

    fireEvent.click(checkbok);
    expect(checkbok).toBeChecked();
    expect(confirmOrderBtn).toBeEnabled();
  });
});
