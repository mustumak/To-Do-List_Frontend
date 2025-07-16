import './Button.scss';

const Button = ({children, onClick, ...otherProps}) => {
    
    return(
        <button {...otherProps} className='btn' onClick={onClick}>{children}</button>
    )
}

export default Button;