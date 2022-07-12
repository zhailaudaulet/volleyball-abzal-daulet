import './index.css';
export const Main = () => {
    return (

        <div className="mainBody">

            <div className='pole'>
                <div className='height'>
                    <p className='commonText'>Height</p>
                    <input className='commonInput' placeholder='Optional' />
                </div>
                <div className='weight'>
                    <p className='commonText'>Weight</p>
                    <input className='commonInput' placeholder='Optional' />
                </div>
                <div className='jumpHeight'>
                    <p className='commonText'>Jumping Reach</p>
                    <input className='commonInput' placeholder='Optional' />
                </div>
                <div className='sjom'>
                    <p className='commonText'>Spike</p>
                    <input className='commonInput' placeholder='Optional' />
                </div>
                <div className='age'>
                    <p className='commonText'>Age</p>
                    <input className='commonInput' placeholder='Optional' />
                </div>
                <div className='position'>
                    <p className='commonText'>Position</p>
                    <select className='commonInput' name='optional'>
                        <option disabled selected >Optional</option>
                        <option>Outside Hitter</option>
                        <option>Setter</option>
                        <option>Pinch Server</option>
                        <option>Opposite Hitter</option>
                        <option>Middle Blocker</option>
                        <option>Libero</option>
                        <option >Ace</option>
                        <option>Captain</option>
                    </select>
                </div>
                <div className='goButton'>
                    <p className='goText'>GO</p>
                </div>



            </div>

        </div>

    );
}