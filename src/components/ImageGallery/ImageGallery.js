import { ImageGalleryItem } from "./ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled"
import PropTypes from 'prop-types';

export const ImageGallery = ({imageArr, openLarge}) => {
    return (
        <GalleryList>
            {imageArr.map(image => {
                const {id, webformatURL, largeImageURL, tags} = image
                return (
                    <ImageGalleryItem id={id} key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} openLarge={openLarge}/>
                )
            })}
        </GalleryList>
    )
}

ImageGallery.propTypes = {
    imageArr: PropTypes.array,
    openLarge: PropTypes.func
}