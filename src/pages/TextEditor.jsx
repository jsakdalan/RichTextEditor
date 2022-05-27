import './TextEditor.css';
import {Container} from 'react-bootstrap';
import React, { useEffect, useState } from "react";

export default function TextEditor(){

    const [htmlTags, setHtmlTags] = useState();
    
    const SaveValue = () =>
    {
        let tagsHtml = document.getElementById('tagsHtml');
        let tagsOfHtml;

        if(tagsHtml.innerHTML){
            tagsOfHtml = tagsHtml.innerHTML;
        }else if(XMLSerializer){
            tagsOfHtml = new XMLSerializer().serializeToString(tagsHtml);
        }
        setHtmlTags(tagsOfHtml)
    }

    const CommandBtn = (props) => {
        return(
            <button className='btns' key={props.cmd} onClick={(e) =>{
                document.execCommand(props.cmd, false, null)
            }}>{props.name}
            </button>
        )
    }

    return(
            <Container>
                <div className='flexBox'>
                    <div className="menu">
                        <div className='innerMenu'>
                            <CommandBtn cmd="bold" name="Bold"/>
                            <CommandBtn cmd="italic" name="Italic"/>
                            <CommandBtn cmd="strikethrough" name="Strike"/>
                        </div>
                        <div className='innerMenu'>
                            <CommandBtn cmd="insertUnorderedList" name="Ordered List"/>
                            <CommandBtn cmd="insertOrderedList" name="Unordered List"/>
                            <CommandBtn cmd="justifyCenter" name="Justify Center"/>
                            <CommandBtn cmd="justifyFull" name="Justify"/>
                            <CommandBtn cmd="justifyLeft" name="Justify Left"/>
                            <CommandBtn cmd="justifyRight" name="Justify Right"/>
                        </div>
                        <div className='innerMenu'>
                            <CommandBtn cmd="undo" name="Undo"/>
                            <CommandBtn cmd="redo" name="Redo"/>
                            <CommandBtn cmd="createLink" name="Link"/>
                        </div>   
                    </div>
                    <div>
                        <div contentEditable={true} className="textArea" id='tagsHtml' onInput={SaveValue}>

                        </div>
                    </div>
                    <div>
                        <textarea className="output"value={htmlTags}>
                            
                        </textarea>
                    </div>
                </div>
            </Container>
    )
}