import PropTypes from 'prop-types';

const Button = ({ label, backgroundColor, size, onclick }) => {

    const style = {
        backgroundColor: backgroundColor,
        fontSize: size === 'sm' ? '12px' : size === 'md' ? '16px' : '20px',
        border: 'none'
    }



    return (
        <button style={style} onclick={onclick}>{label}</button>
    )
}




Button.prototype = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['sm', "md", "lg"]),
    onclick: PropTypes.func
}
export default Button


