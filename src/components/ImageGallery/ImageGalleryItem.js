import { GalleryItem, GalleryImage } from "./ImageGallery.styled"
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({openLarge, id, webformatURL, largeImageURL, tags}) => {
    
    return (
        <GalleryItem>
            <GalleryImage data-id={id} src={webformatURL} data-src={largeImageURL} alt={tags} onClick={openLarge} />
        </GalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    openLarge: PropTypes.func,
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string
}