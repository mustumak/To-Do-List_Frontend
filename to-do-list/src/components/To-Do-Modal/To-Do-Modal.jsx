import { useState, useEffect } from 'react';
import FormInput from '../form-input/form-input';
import Button from '../Button/Button';
import './To-Do-Modal.scss';

const deaultFormFields = {
    title: '',
    description: '',
    dueDate: '',
    status: ''
}

const Modal = ({isOpen, onClose, onSubmit, initialData = {}, mode}) => {

    const [formFields, setFormFields] = useState(deaultFormFields);
    const {title,description,dueDate,status} = formFields;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if(initialData){
            setFormFields({
                title: initialData.title || '',
                description: initialData.description || '',
                dueDate: initialData.dueDate || '',
                status: initialData.status || ''
            });
        }
    },[JSON.stringify(initialData)]);

    const handleChange = (event) => {

        const{name, value} = event.target;
        setFormFields({...formFields, [name] : value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formFields);
        onClose();
        setFormFields(deaultFormFields);
    }

    return (
        isOpen && (
            <div className='modal-overlay'>
                <div className='modal-content'>
                    <h2>{mode === 'edit' ? 'Edit' : 'Add'} ToDo</h2>
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            type="text"
                            name="title"
                            required
                            value={title}
                            onChange={handleChange}
                            label="Title"
                        />
                        <FormInput
                            type="text"
                            name="description"
                            required
                            value={description}
                            onChange={handleChange}
                            label="Description"
                        />
                        <FormInput
                            type="date"
                            name="dueDate"
                            required
                            value={dueDate}
                            onChange={handleChange}
                            label="Due Date"
                        />
                        <div className="status-toggle">
                            <label className="status-label">Mark as Completed</label>
                            <label className="toggle-switch">
                                <input
                                type="checkbox"
                                name="status"
                                checked={status === 'Completed'}
                                onChange={(e) =>
                                    setFormFields({
                                    ...formFields,
                                    status: e.target.checked ? 'Completed' : 'Pending',
                                    })
                                }
                                />
                                <span className="slider"></span>
                            </label>
                            <span className="status-text">{status}</span>
                            </div>
                        <div className='modal-actions'>
                            <Button type="submit">Save</Button>
                            <Button type="button" onClick={onClose}>Cancel</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    )
}

export default Modal;