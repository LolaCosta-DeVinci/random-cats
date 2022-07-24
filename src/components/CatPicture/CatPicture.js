import { Card, Icon, Image } from 'semantic-ui-react'

import './catPicture.scss';

import PropTypes from 'prop-types';

function CatPicture({ catPicture }) {
  return (
    <Card centered >
    <Image src={catPicture} wrapped ui={false} />
    </Card>
  )
}

CatPicture.propTypes = {
  catPicture: PropTypes.string.isRequired,
};

export default CatPicture;
