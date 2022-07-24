import './factButton.scss';
import { Button } from 'semantic-ui-react';

import PropTypes from 'prop-types';

function FactButton({ loadRandomCatFact }) {
  return (
    <Button
      size='huge'
      color='blue'
      onClick={loadRandomCatFact}
      >Random Cat Fact
    </Button>
  )
}

FactButton.propTypes = {
  loadRandomCatFact: PropTypes.func.isRequired,
};

export default FactButton;
