import { act } from 'react-dom/test-utils';
import './index.css';
import aobaJohsai from "../../data/aobaJohsai.json";
import dateTech from "../../data/dateTech.json";
import fukurodani from "../../data/fukurodani.json";
import inarizaki from "../../data/inarizaki.json";
import karasuno from "../../data/karasuno.json";
import nekoma from "../../data/nekoma.json";
import others from "../../data/others.json";
import shiratorizawa from "../../data/shiratorizawa.json";
export const Comparation = ({ setContent, setCh, setPh }) => {
    const dataChar = [...aobaJohsai, ...dateTech, ...fukurodani, ...inarizaki, ...karasuno, ...nekoma, ...others, ...shiratorizawa];
        
    const handleAlert = ()=>{
        alert('We are still working on this feature! So there could be some problems')
    }
    const act = ()=>{
        let ind = Math.floor(Math.random() * (63 - 0) + 0);
        setCh({data: dataChar[ind].items});
        setPh(document.getElementById('inp').value);
        console.log(document.getElementById('inp').value);
    }
    return (
        <div className='centerSQR'>
            <input id='inp' type={"file"} ></input>

            <div className='fileButton' onClick={()=>{setContent(4); act()}}>
                <p className='upload'>Upload</p>

            </div>
        </div>
    );
}