import './index.css';
export const Result2 = ({ setContent, blurBackground, character, ph }) => {
    return (
        <div className='resultBody'>
            <div className="resultSection">
                <div className='likeBox'>
                    <p className='likeText'>You are like</p>
                </div>
                <div className='characterImg'>
                    <img className='ava' src={character.data[5].value.includes('.png') ? character.data[5].value.substring(0, (character.data[5].value.indexOf('.png') + 4)) : character.data[5].value.substring(0, (character.data[5].value.indexOf('.jpg') + 4))} />
                </div>
                <div className='yImg'>
                    <img src={ph} />
                </div>


                <div className='nameBox'><p className='charName'>{character.data[0].value}</p></div>





            </div>
        </div>

    );
}