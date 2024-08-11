
import { useState } from "react";

export function InputField(props)
{
    const letterStyle = {
        fontSize: '21px',
        margin: 'auto',
        color:'black'
    };
    const mystyle = {
        background: 'white',
        border: 'none',
        borderRadius: '11px',
        marginRight:'1px',
        width: '20%',        
        height: '130%',
        color: 'white',
        float: 'left',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    };

    return (
        <div className="Field" style={mystyle}>
            <h1 style={letterStyle}>
                {props.name}
            </h1>
        </div>
    );
}

export function InputFields(props)
{
    const mystyle = {
        margin: 'auto',
        width: '20%',
        height: '40px',
        padding: '10px'
    };
    return (
        <>
            {
                props.registeredWords.map((arr, index)=>(
                    <div key={index} style={mystyle}>
                        <InputField name={props.registeredWords[index][0]}/>
                        <InputField name={props.registeredWords[index][1]}/>
                        <InputField name={props.registeredWords[index][2]}/>
                        <InputField name={props.registeredWords[index][3]}/>
                    </div>        
                ))   
            }
        </>
    )
}

