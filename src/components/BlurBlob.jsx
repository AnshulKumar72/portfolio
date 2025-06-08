import PropTypes from 'prop-types';

const BlurBlob = ({ position = {}, size = {} }) => {
  const {
    top = '50%',
    left = '50%',
    right,
    bottom,
  } = position;

  const {
    width = '300px',
    height = '300px',
  } = size;

  const blobStyle = {
    position: 'absolute',
    top,
    left,
    right,
    bottom,
    width,
    height,
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={blobStyle}>
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob" />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

BlurBlob.defaultProps = {
  position: { top: '50%', left: '50%' },
  size: { width: '300px', height: '300px' },
};

export default BlurBlob;
