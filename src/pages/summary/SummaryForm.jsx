import React, { useState } from 'react'
import { Check } from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export default function SummaryForm() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <section>
      <Check
        type="checkbox"
        className="mb-3"
        checked={ acceptedTerms }
        id="I agree to Terms and Conditions"
        label="I agree to Terms and Conditions"
        onChange={ () => setAcceptedTerms(!acceptedTerms) }
      />
      <Button
        variant="primary"
        disabled={ !acceptedTerms }
      >
        Confirm order
      </Button>
    </section>
  );
}
