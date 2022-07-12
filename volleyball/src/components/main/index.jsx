import './index.css';
import aobaJohsai from "../../data/aobaJohsai.json";
import dateTech from "../../data/dateTech.json";
import fukurodani from "../../data/fukurodani.json";
import inarizaki from "../../data/inarizaki.json";
import karasuno from "../../data/karasuno.json";
import nekoma from "../../data/nekoma.json";
import others from "../../data/others.json";
import shiratorizawa from "../../data/shiratorizawa.json";
export const Main = () => {
    const defineChar = () => {

        const dataChar = [...aobaJohsai, ...dateTech, ...fukurodani, ...inarizaki, ...karasuno, ...nekoma, ...others, ...shiratorizawa];

        const dataUser = [];

        for (let index = 0; index < 6; index++) {
            dataUser[index] = document.getElementById(`${index}`).value;
        }


    }
    return (

        <div className="mainBody">

            <div className='pole'>
                <div className='height'>
                    <p className='commonText'>Height</p>
                    <input className='commonInput' placeholder='Optional' id='0' />
                </div>
                <div className='weight'>
                    <p className='commonText'>Weight</p>
                    <input className='commonInput' placeholder='Optional' id='1' />
                </div>
                <div className='jumpHeight'>
                    <p className='commonText'>Jumping Reach</p>
                    <input className='commonInput' placeholder='Optional' id='2' />
                </div>
                <div className='sjom'>
                    <p className='commonText'>Spike</p>
                    <input className='commonInput' placeholder='Optional' id='3' />
                </div>
                <div className='age'>
                    <p className='commonText'>Age</p>
                    <input className='commonInput' placeholder='Optional' id='4' />
                </div>
                <div className='position'>
                    <p className='commonText'>Position</p>
                    <select className='commonInput' name='optional' id='5'>
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
                <div className='goButton' onClick={defineChar}>
                    <p className='goText'>GO</p>
                </div>
            </div>

        </div>

    );
}