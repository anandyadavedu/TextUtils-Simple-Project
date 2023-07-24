import React,{useState,useEffect} from 'react';

export default function TextForm (props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        // console.log("On click function ");
        setText(event.target.value)
    }
    const handleLoClick=()=>{
        let newText2=text.toLowerCase();
        setText(newText2)
    }
    const handleClearClick=()=>{
        
        setText("");

    }

    const[text,setText]=useState('Enter The Text Here')

    // const[text,setCount]=useState('0');
    const [wordCount, setWordCount] = useState(0);
    // const [charCount, setCharCount] = useState(0);


    useEffect(()=>{
        const newtext=text.split(' ');

        let wordCount=0;
        newtext.forEach((text)=>{
            if(text.trim()!==''){
                wordCount++;
            }
        });
        setWordCount(wordCount);
        // setCharCount(text.length);
    },[text]);


  return (
    <>
    <div>

        <h1>{props.heading}</h1>
           <div className="mb-3 my-3">
                    <textarea className="form-control bg-secondary text-white" value={text} onChange={handleOnChange} id="textUtils" rows={8}> </textarea>
                    <button className='btn btn-success my-2 mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className='btn btn-success my-2 mx-2'  onClick={handleLoClick}>Convert to LowerCase</button>
                 <div>
                    <button className='btn btn-success  mx-2'  onClick={handleClearClick}>Clear Text</button>
                 </div>
            </div>

    </div>
    <div className='TextSummary'>
        <h3>Your Text Summary</h3>
        <p>word {wordCount} and character are {text.length}</p>

    </div>
    
    </>
  )
} 
// export default App; 
