import './index.css'
import { useEffect } from 'react';
export const Result = ({ character, dataUser }) => {
    const temp = Number(character.data[2].value.substring(0, 3));
    const temp2 = Number(character.data[6].value.substring(0, 3))
    const coef1 = (temp2 - temp) - ((temp / 5) * 2);
    const zChanger = () => {
        if (dataUser[0] > Number(character.data[2].value.substring(0, 3))) {
            document.getElementById('heightChar').style.zIndex = 1;
            document.getElementById('heightY').style.zIndex = 0;
        }
        if (dataUser[1] > Number(character.data[3].value.substring(0, 3))) {
            document.getElementById('widthChar').style.zIndex = 1;
            document.getElementById('widthY').style.zIndex = 0;
        }
        if (dataUser[2] > coef1) {
            document.getElementById('verticalChar').style.zIndex = 1;
            document.getElementById('verticalY').style.zIndex = 0;
        }
        if (dataUser[3] > Number(character.data[6].value.substring(0, 3))) {
            document.getElementById('spikeChar').style.zIndex = 1;
            document.getElementById('spikeY').style.zIndex = 0;
            
        }
        if (dataUser[4] > Number(character.data[1].value.substring(0, 2))) {
            document.getElementById('ageChar').style.zIndex = 1;
            document.getElementById('ageY').style.zIndex = 0;

        }
    }
    useEffect(() => { zChanger() }, [])
    return (
        <div className="resultBody">
            <div className="resultSection">
                <div className='likeBox'>
                    <p className='likeText'>You are like</p>
                </div>
                <div className='characterImg'>
                    <img className='ava' src={character.data[5].value.includes('.png')?character.data[5].value.substring(0, (character.data[5].value.indexOf('.png') + 4)):character.data[5].value.substring(0, (character.data[5].value.indexOf('.jpg') + 4))} />
                </div>
                <div className='notCommonStatsBar'>
                    <p className='teeext'>Height</p>
                    <progress id='heightChar' max={200} value={Number(character.data[2].value.substring(0, 3))} className='characterStats'>
                    </progress>
                    <progress id='heightY' max={200} value={dataUser[0]} className='yourStats'></progress>


                </div>

                <div className='notCommonStatsBar2'>
                    <p className='teeext'>Weight</p>
                    <progress id='widthChar' max={100} value={Number(character.data[3].value.substring(0, 3))} className='characterStats'>
                    </progress>
                    <progress id='widthY' max={100} value={dataUser[1]} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar3'>
                    <p className='teeext'>Vertical Jump</p>
                    <progress id='verticalChar' max={160} value={coef1} className='characterStats'>
                    </progress>
                    <progress id='verticalY' max={160} value={dataUser[2]} className='yourStats'></progress>

                </div>

                <div className='notCommonStatsBar4'>
                    <p className='teeext'>Spike</p>
                    <progress id='spikeChar' max={380} value={Number(character.data[6].value.substring(0, 3))} className='characterStats'>
                    </progress>
                    <progress id='spikeY' max={380} value={dataUser[3]} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar5'>
                    <p className='teeext'>Age</p>
                    <progress id='ageChar' max={30} value={Number(character.data[1].value.substring(0, 2))} className='characterStats'>
                    </progress>
                    <progress id='ageY' max={30} value={dataUser[4]} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar6'>
                    <p className='teeext'>Simmilarity {100 * character.point / 4}%</p>
                    <progress max={1} value={character.point / 4} className='characterStats'>26
                    </progress>

                </div>

                <div className='nameBox'><p className='charName'>{character.data[0].value}</p></div>

                <div className='theInfoSignChar'>Yellow - {character.data[0].value}'s stats
                </div>
                <div className='theInfoSignY'>Orange - your stats
                </div>

                

                <div className='basicInfo'>
                    <p className='infoText'>Want more?</p>
                    <div className='moreButton' onClick={() => { window.open(`https://haikyuu.fandom.com/wiki/${character.data[0].value.substring(character.data[0].value.indexOf(" ") + 1)}_${character.data[0].value.substring(0, character.data[0].value.indexOf(" "))}`, '_blank'); }}>
                        <p className='wikiButton'>Wiki</p>
                    </div>
                </div>




            </div>


        </div>
    );
}