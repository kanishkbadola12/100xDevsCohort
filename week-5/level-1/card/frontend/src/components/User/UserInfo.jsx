import './UserInfo.css'
import UserInfoForm from './UserInfoForm';

function UserInfo({getLatestUserData}) {
    async function postDataToServer(form) {
        const formData = {
            name: form.name,
            description: form.description,
            socialMedia: {
                twitter: form.twitterUrl,
                linkedin: form.linkedinUrl,
                facebook: form.facebookUrl
            },
            //accepts space and comma both
            interests: form.interests.split(/[ ,]+/)
        }

        const response = await fetch('http://localhost:3000/newCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            getLatestUserData();
        }
    }

    return (
        <div className='user-info-container'>
            <UserInfoForm postDataToServer={postDataToServer} />
        </div>
    )
}

export default UserInfo;