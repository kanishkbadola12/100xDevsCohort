import { Fragment } from 'react';
import './Button.css'

function Button(props) {
    return (
        <Fragment>
            {Object.keys(props).length > 0 && Object.keys(props.socialMedia).map((socialMedia, index) => {
                return (
                    <a href={props.socialMedia[socialMedia]} key={index}>
                        <button className='btn'>
                            <img className='icon-image' src={`/assets/images/${socialMedia}.png`} />
                        </button>
                    </a>
                )
            })}
        </Fragment>
    )

}

export default Button;