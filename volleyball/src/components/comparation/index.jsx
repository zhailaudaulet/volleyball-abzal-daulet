import './index.css';
export const Comparation = ({ setContent }) => {
    return (
        <div className='centerSQR'>
            <input type={"file"} id='upload' hidden></input>

            <div for="upload" className='fileButton'>
            <label for="upload">Select some files</label>
            </div>
        </div>
    );
}