import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    var [text, setText] = useState("")
    var previousRender = useRef();
    useEffect(()=>{
        previousRender.current = text;
        console.log(previousRender.current);
    }, [text])

    return (
        <div>
            <h1>This is UseRef Example.</h1>
            Type you text:{" "}
                <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} 
            />
            <h2>The current redner text is {text} </h2>
            <h3>The Previous render text is {previousRender.current}</h3>
        </div>
    )
}

export default UseRef