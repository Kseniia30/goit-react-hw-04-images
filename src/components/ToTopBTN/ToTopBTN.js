import PropTypes from 'prop-types';
import { TbArrowBigUpLine } from "react-icons/tb";
import { TopBTN } from "../App/App.styled"

export const ToTopBTN = ({backToTop}) => {
    return (
        <TopBTN onClick={backToTop}>
            <TbArrowBigUpLine/>
        </TopBTN>
    )
}

ToTopBTN.propTypes = {
    backToTop: PropTypes.func
}