import { useState } from 'react';
import './UserInfoForm.css'

function UserInfoForm({postDataToServer}) {
    const INITIAL_FORM_STATE = {
        name: '',
        description: '',
        twitterUrl: '',
        linkedinUrl: '',
        facebookUrl: '',
        interests: ''
    };
    const [form, setForm] = useState(INITIAL_FORM_STATE);

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        })
    };

    function handleSubmit(event) {
        postDataToServer(form);
        event.preventDefault();
    };

    function clearForm() {
        setForm(INITIAL_FORM_STATE);
    };

    return (
        <form className='user-info-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' value={form.name} onChange={handleChange} required />

            <label htmlFor='description'>Description:</label>
            <textarea id='description' name='description' value={form.description} onChange={handleChange} required />

            <label htmlFor='twitterUrl'>Twitter Handle:</label>
            <input id='twitterUrl' type='text' name='twitterUrl' value={form.twitterUrl} onChange={handleChange}></input>

            <label htmlFor='linkedinUrl'>LinkedIn Profile:</label>
            <input id='linkedinUrl' type='text' name='linkedin' value={form.linkedinUrl} onChange={handleChange}></input>

            <label htmlFor='facebookUrl'>Facebook Profile:</label>
            <input id='facebookUrl' type='text' name='facebook' value={form.facebookUrl} onChange={handleChange}></input>

            <label htmlFor='interests'>Interests:</label>
            <textarea id='interests' name='interests' value={form.interests} onChange={handleChange} required></textarea>

            <div className='footer'>
                <button className='footer-buttons create-card' type='submit'>Create Card</button>
                <button className='footer-buttons clear-form' type='button' onClick={clearForm}>Clear Form</button>
            </div>
        </form>
    )
}

export default UserInfoForm;