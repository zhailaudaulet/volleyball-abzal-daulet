import './index.css';
import myGif from '../../original.gif'
import ball from '../../volleyball.png'
export const Start = ({ setContent, blurBackground }) => {
    console.log(myGif)
    return (
        <div className="startBody">
            <p className='question'>Do you want to know which of
                your favorite anime characters
                is similar to you?
            </p>
            <div className='video'>

                <img src={myGif} className='theVideo'/>
            </div>
            <div className='circle' onClick={() => { setContent(1); blurBackground() }}>
                <img src={ball} className='ball' />
            </div>

            <a className='reflink' href="https://www.flaticon.com/free-icons/volleyball" title="volleyball icons">Volleyball icons created by Freepik - Flaticon</a>

        </div>
    );
}