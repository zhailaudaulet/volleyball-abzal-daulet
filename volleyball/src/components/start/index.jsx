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
<video  width="550" height="300" controls>
    <source src='https://r22107.kujo-jotaro.com/haikyuu/1/2.480.bc037afec5f81061.mp4?hash1=e301275e697a5af7c96bc689d3b2a329'></source>
</video>
                {/* <img src={myGif} className='theVideo'/> */}
            </div>
            <div className='circle' onClick={() => { setContent(1); blurBackground() }}>
                <img src={ball} className='ball' />
            </div>

            <a className='reflink' href="https://www.flaticon.com/free-icons/volleyball" title="volleyball icons">Volleyball icons created by Freepik - Flaticon</a>

        </div>
    );
}