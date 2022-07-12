import './index.css'
export const Result = () => {
    return (
        <div className="resultBody">
            <div className="resultSection">
                <div className='likeBox'>
                    <p className='likeText'>You are like</p>
                </div>
                <div className='characterImg'>
                    Some Image
                </div>
                <div className='notCommonStatsBar'>
                    <p className='teeext'>Height</p>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar2'>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar3'>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar4'>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar5'>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

                <div className='notCommonStatsBar6'>
                    <progress max={100} value={75} className='characterStats'>26
                    </progress>
                    
                </div>
                <div className='nameBox'><p className='charName'>Daulet Zhailau</p></div>
                
                <div className='basicInfo'>
                    <p className='infoText'>Basic Info</p>
                </div>



            </div>


        </div>
    );
}