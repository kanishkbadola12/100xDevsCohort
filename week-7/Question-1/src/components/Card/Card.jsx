import './Card.css'

export const Card = ({gitHubInfo}) => {
    return (
        <>
            <div className='profile-container'>
                <div className='header'>
                    <div className='github-image-container'>
                        <img className='github-image' src={'../public/GitHub.png'} />
                    </div>                    
                    <div className='profile-image-container'>
                        <img className='profile-image' src={'../public/Kanishk.jpeg'} />
                    </div>
                </div>
                <div className='body'>
                    <div className='heading'>{gitHubInfo.name}</div>
                    <div className='sub-heading'>{gitHubInfo.login}</div>
                    <div className='content'>{gitHubInfo.bio}</div>
                    <div className='content'>
                        Senior Frontend Developer | {gitHubInfo.location} | {gitHubInfo.company}
                    </div>
                </div>
                <hr />
                <div className='footer'>
                    <div className='social'>
                        <span className='heading'>{gitHubInfo.followers}</span>
                        <span className='sub-heading'>Followers</span>
                    </div>
                    <div className='social'>
                        <span className='heading'>{gitHubInfo.following}</span>
                        <span className='sub-heading'>Following</span>
                    </div>
                    <div className='social'>
                        <span className='heading'>{gitHubInfo.public_repos}</span>
                        <span className='sub-heading'>Repositories</span>
                    </div>
                </div>
            </div>
        </>
    )
};