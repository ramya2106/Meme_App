import React, { useEffect, useState } from 'react';

const Meme = () => {
    const [someState, setSomeState] = useState({
        firstvalue: "",
        secondvalue: ""
    });
    function handleChange(event) {
        console.log(event.target.value);
        setSomeState({
            ...someState,
            [event.target.name]:event.target.value
        });
      }
    const [randomImg, setrandomImg] = useState("https://i.imgflip.com/30b1gx.jpg");
    const [apiImg, setapiImg] = useState([]);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then(response => setapiImg(response.data.memes))
    }, [])
    const onSubmit = (event) => {
        event.preventDefault()
        console.log("Api called");
        console.log(apiImg);
        const imgnum = Math.floor(Math.random() * apiImg.length);
        setrandomImg(apiImg[imgnum].url);
    }
    return(
        <div> 
            <div className="meme-container">
            <form onSubmit={onSubmit}>           
        <input type="text" id="firstfield" name="firstvalue" placeholder="Enter the first value" value = {someState.firstvalue} onChange={handleChange}/>
        <input type="text" id="secondfield" name="secondvalue" placeholder="Enter the second value" value = {someState.secondvalue} onChange={handleChange}/>
        <button type = "submit">Generate Meme</button>    
            </form>
            
            <div className="meme img">
                <img src = {randomImg} />
           
            <h2 className="h2 top">
                {someState.firstvalue}
            </h2>
            <h2 className='h2 bottom'>
                {someState.secondvalue}
            </h2>
            </div>
            </div>
            </div>
        
    )
}

export default Meme;