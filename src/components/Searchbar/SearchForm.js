import { FormBox, SearchBTN, SearchInput, SearchBTNIcon } from "./Searchbar.styled";
import { BsSearch } from "react-icons/bs";
import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmit }) => {
    return (
        <FormBox onSubmit={onSubmit}>
            <SearchBTN type="submit">
                <SearchBTNIcon>
                    <BsSearch />
                </SearchBTNIcon>
            </SearchBTN>
            <SearchInput
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"/>
        </FormBox>
    )
}

SearchBox.propTypes = {
    onSubmit: PropTypes.func
}