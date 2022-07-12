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
                <div className='commonStatsBar'>
                    <progress max={100} value={75} className='characterStats'>
                    </progress>
                    <progress max={100} value={70} className='yourStats'></progress>
                </div>

            </div>


        </div>
    );
}