import './index.css';
import ball from '../../volleyball.png'
export const Start = ({setContent}) => {
    return (
        <div className="startBody">
            <p className='question'>Do you want to know which of
                your favorite anime characters
                is similar to you?
            </p>
            <div className='video'>
            </div>
            <div className='circle' onClick={()=>{setContent(1)}}>
                <img src={ball} className='ball'></img>
            </div>

            <a className='reflink' href="https://www.flaticon.com/free-icons/volleyball" title="volleyball icons">Volleyball icons created by Freepik - Flaticon</a>

        </div>
    );
}