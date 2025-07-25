import './form-input.scss';

const FormInput = ({label, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} autoComplete="off"/>
            { label && otherProps.type !== 'date' && (
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;