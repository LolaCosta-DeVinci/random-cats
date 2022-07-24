import './catFact.scss';
import { Segment } from 'semantic-ui-react'

import PropTypes from 'prop-types';

function CatFact({ catFact }) {
  return (
    <Segment size='big'>{catFact}</Segment>
  )
}

CatFact.propTypes = {
  catFact: PropTypes.string.isRequired,
};

export default CatFact;
