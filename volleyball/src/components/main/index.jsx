import './index.css';
import aobaJohsai from "../../data/aobaJohsai.json";
import dateTech from "../../data/dateTech.json";
import fukurodani from "../../data/fukurodani.json";
import inarizaki from "../../data/inarizaki.json";
import karasuno from "../../data/karasuno.json";
import nekoma from "../../data/nekoma.json";
import others from "../../data/others.json";
import shiratorizawa from "../../data/shiratorizawa.json";
export const Main = ({setCh, setContent}) => {
    const defineChar = () => {

        const dataChar = [...aobaJohsai, ...dateTech, ...fukurodani, ...inarizaki, ...karasuno, ...nekoma, ...others, ...shiratorizawa];

        const dataUser = [];

        for (let index = 0; index < 6; index++) {
            dataUser[index] = document.getElementById(`${index}`).value;
        }
        let priorityArr = [];
        for (let index = 0; index < dataChar.length; index++) {
            if (dataChar[index].items[4].value.includes(`${dataUser[5]}`)) {
                priorityArr.push({ data: dataChar[index].items, point: 0 });
            }
        }
        if (priorityArr.length === 0) {
            for (let index = 0; index < dataChar.length; index++) {
                priorityArr[index] = { data: dataChar[index].items, point: 0 };
            }
        }
        for (let index = 0; index < priorityArr.length; index++) {
            const temp = Number(priorityArr[index].data[2].value.substring(0, 3));
            if (temp <= Number(dataUser[0]) + 2 && temp >= Number(dataUser[0]) - 2) {
                priorityArr[index].point++;

            }
            const temp1 = Number(priorityArr[index].data[3].value.substring(0, 2));

            if (temp1 <= Number(dataUser[1]) + 4 && temp1 >= Number(dataUser[1]) - 4) {
                priorityArr[index].point++;

            }
            const temp2 = Number(priorityArr[index].data[6].value.substring(0, 3));
            if (temp2 <= Number(dataUser[3]) + 2 && temp2 >= Number(dataUser[3]) - 2) {
                priorityArr[index].point++;

            }
            const coef1 = (temp2-temp) - ((temp/5)*2);
            if (coef1 <= Number(dataUser[2]) + 5 && coef1 >= Number(dataUser[2]) - 5) {
                priorityArr[index].point++;

            }

            const temp3 = Number(priorityArr[index].data[1].value.substring(0, 2));
            console.log(temp3);
            if (temp3 <= Number(dataUser[4]) + 2 && coef1 >= Number(dataUser[4]) - 2) {
                priorityArr[index].point++;

            }
        }
        // for (let index = 0; index < priorityArr.length; index++) {
        //     const temp = Number(priorityArr[index].data[2].value.substring(0, 3));
        //     priorityArr[index].point += Math.abs(temp - dataUser[0]);

        //     const temp1 = Number(priorityArr[index].data[3].value.substring(0, 2));
        //     priorityArr[index].point += Math.abs(temp1 - dataUser[1]);

        //     const temp2 = Number(priorityArr[index].data[6].value.substring(0, 3));
        //     priorityArr[index].point += Math.abs(temp2 - dataUser[3]);

        //     const coef1 = (temp2 - temp) - ((temp / 5) * 2);
        //     priorityArr[index].point += Math.abs(coef1 - dataUser[2]);

        //     const temp3 = Number(priorityArr[index].data[1].value.substring(0, 2));
        //     priorityArr[index].point += Math.abs(coef1 - dataUser[4]);
        // }
        let max = priorityArr[0];
        for (let index = 1; index < priorityArr.length; index++) {
            if (priorityArr[index].point > max.point) {
                max = priorityArr[index];
            }
        }
        console.log(priorityArr);
        console.log(max);
        setCh(max);
        // let min = priorityArr[0];
        // for (let index = 1; index < priorityArr.length; index++) {
        //     if (priorityArr[index].point <= min.point) {
        //         min = priorityArr[index];
        //     }
        // }
        // console.log(priorityArr);
        // console.log(min);
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
                <div className='goButton' onClick={()=>{defineChar();setContent(3)}}>
                    <p className='goText'>GO</p>
                </div>
            </div>

        </div>

    );
}