import './Card.css'
import CardPresenter from './CardPresenter';

function Card({usersInfo, getLatestUserData}) {
    async function deleteDataFromServer(index) {
        const response = await fetch('http://localhost:3000/deleteCard/' + index, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            getLatestUserData();
        }
    };

    async function updateDataToServer(updatedData) {
        const response = await fetch('http://localhost:3000/updateCard/' + updatedData.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...updatedData, socialMedia: {
                twitter: "www.twitter.com/kanishk",
                linkedin: "www.linkedIn.com/kanishk",
                facebook: "www.facebook.com/kanishk"
            }})
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            getLatestUserData();
        }
    };

    return (
        <div className='card-container'>
            {Object.keys(usersInfo).length > 0 && usersInfo.cards.length > 0 &&
                usersInfo.cards.map((userInfo) => {
                    return <CardPresenter 
                                key={userInfo._id} 
                                userInfo={userInfo} 
                                updateDataToServer={updateDataToServer} 
                                deleteDataFromServer={deleteDataFromServer}
                            />
                })
            }
        </div>
    );
}

export default Card;