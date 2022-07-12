import './index.css'
export const Result = ({character}) => {
    return (
        <div className="resultBody">
            <div className="resultSection">
                <div className='likeBox'>
                    <p className='likeText'>You are like</p>
                </div>
                <div className='characterImg'>
                    <img className='ava' src={character.data[5].value.substring(0, (character.data[5].value.indexOf('.png')+4))}/>
                </div>
                <div className='notCommonStatsBar'>
                    <p className='teeext'>Height</p>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar2'>
                <p className='teeext'>Weight</p>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar3'>
                <p className='teeext'>Vertical Jump</p>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar4'>
                <p className='teeext'>Spike</p>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar5'>
                <p className='teeext'>Age</p>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar6'>
                <p className='teeext'>Simmilarity</p>
                    <progress max={100} value={75} className='characterStats'>26
                    </progress>
                    
                </div>
                <div className='nameBox'><p className='charName'>Daulet Zhailau</p></div>
                
                <div className='basicInfo'>
                    <p className='infoText'>Basic Info</p>
                </div>
                <div className='moreButton'></div>



            </div>


        </div>
    );
}