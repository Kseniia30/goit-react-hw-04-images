import PropTypes from 'prop-types';

export const BackdropImage = ({ largeIMG, modalTags }) => {
    return (
        <img src={largeIMG} alt={modalTags} width="1000" height="auto"/>
    )
}

BackdropImage.propTypes = {
    largeIMG: PropTypes.string,
    modalTags: PropTypes.string
}
