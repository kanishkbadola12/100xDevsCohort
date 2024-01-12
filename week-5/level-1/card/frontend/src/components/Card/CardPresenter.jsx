import { useState } from 'react';
import Button from '../UI/Button';
import './CardPresenter.css'

function CardPresenter({ userInfo, updateDataToServer, deleteDataFromServer }) {
    const [name, setName] = useState(userInfo.name);
    const [description, setDescription] = useState(userInfo.description);
    const [interests, setInterests] = useState(userInfo.interests)
    const [isEditable, setIsEditable] = useState(false);

    function handleNameUpdate(event) {
        setName(event.currentTarget.textContent);
    }

    function handleDescriptionUpdate(event) {
        setDescription(event.currentTarget.textContent);
    }

    function handleInterestsUpdate(event) {
        let interestsInnerHTML = [];
        Array.from(event.currentTarget.children).map(span => {
            interestsInnerHTML.push(span.innerHTML.toString())
        })
        setInterests(interestsInnerHTML);
    }

    function handleCardUpdate(index) {
        updateDataToServer({
            name: name,
            description: description,
            interests: interests,
            id: index
        });
        setIsEditable(false);
    }

    function cancelCardUpdate() {
        console.log(name)
        setIsEditable(false)
    }

    return <>
        <div className='card'>
            <div className='header'>
                <div className='heading'>
                    <h2 className={`${isEditable ? 'edit-operation' : ''}`}
                        contentEditable={isEditable}
                        onBlur={handleNameUpdate}
                        suppressContentEditableWarning={true}
                    >
                        {name}
                    </h2>
                    <span className={`description ${isEditable ? 'edit-operation' : ''}`}
                        contentEditable={isEditable}
                        suppressContentEditableWarning={true}
                        onBlur={handleDescriptionUpdate}
                    >
                        {description}
                    </span>
                </div>
                <div className='action-buttons'>
                    <button onClick={() => setIsEditable(!isEditable)} className='edit-button fa fa-edit'></button>
                    <button onClick={() => deleteDataFromServer(userInfo._id)} className='delete-button fa fa-trash-o'></button>
                </div>
            </div>
            <div className='interests'>
                <h3>Interests</h3>
                <div
                    className={`description ${isEditable ? 'edit-operation' : ''}`}
                    contentEditable={isEditable}
                    suppressContentEditableWarning={true}
                    onBlur={handleInterestsUpdate}
                >
                    {interests.map((interest, index) => {
                        return <span key={index}>{interest}</span>
                    })}
                </div>
            </div>
            <div className='footer'>
                <div className='social-media'>
                    <Button socialMedia={userInfo.socialMedia} />
                </div>
                {isEditable &&
                    <div className='cta-buttons'>
                        <button className='save-button' onClick={() => handleCardUpdate(userInfo._id)} >Save</button>
                        <button className='cancel-button' onClick={cancelCardUpdate} >Cancel</button>
                    </div>
                }
            </div>
        </div>
    </>
}

export default CardPresenter;