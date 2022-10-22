import { useState } from "react";
import { LoadMoreButton } from "./LoadMoreBTN.styled"
import PropTypes from 'prop-types';

export const Button = ({ onPage }) => {
    const [pageNumber] = useState(1)

    const loadMore = evt => {
        onPage(pageNumber)
    }

    return (
        <LoadMoreButton type="button" onClick={loadMore}>Load More</LoadMoreButton>
    )
}

Button.propTypes = {
    onPage: PropTypes.func
}