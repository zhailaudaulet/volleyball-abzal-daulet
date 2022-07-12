import './index.css';
export const Main = () => {
    return (

        <div className="mainBody">

            <div className='pole'>
                <div className='height'>
                    <input className='commonInput' placeholder='Optional' />
                </div>
                <div className='weight'>
                    <input className='commonInput' placeholder='Optional' />
                </div>
                <div className='jumpHeight'>
                    <input className='commonInput' placeholder='Optional' />
                </div>
                <div className='sjom'>
                    <input className='commonInput' placeholder='Optional' />
                </div>
                <div className='age'>
                    <input className='commonInput' placeholder='Optional' />
                </div>
                <div className='position'>
                    <select className='commonInput' name='optional'>
                        <option disabled selected>Optional</option>
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