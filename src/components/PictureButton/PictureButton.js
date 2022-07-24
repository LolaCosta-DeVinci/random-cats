import './pictureButton.scss';
import { Button } from 'semantic-ui-react';

import PropTypes from 'prop-types';


function PictureButton({ loadCatPictures }) {
  return (
    <Button
      size='huge'
      color='teal'
      onClick={loadCatPictures}
      >Another Random Cat Picture !
    </Button>
  )
}

PictureButton.propTypes = {
  loadCatPictures: PropTypes.func.isRequired,
};

export default PictureButton;
