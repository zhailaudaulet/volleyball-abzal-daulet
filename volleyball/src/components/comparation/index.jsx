import './index.css';
export const Comparation = ({ setContent }) => {
    const handleAlert = ()=>{
        alert('We are still working on this feature! So there could be some problems')
    }
    return (
        <div className='centerSQR'>
            <input type={"file"} ></input>

            <div className='fileButton' onClick={()=>{setContent(4)}}>
                <p className='upload'>Upload</p>

            </div>
        </div>
    );
}