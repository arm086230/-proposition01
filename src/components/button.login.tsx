import React from 'react'

interface PropsButtonLogin{
    primary ? : boolean
    backgroundColor?: string
    size? : "small" | "medium" | "large"
    label : string
    onClick?: () => void
    disabled? : boolean
    
}

function ButtonLogin(props : PropsButtonLogin) {
    let size = " "
    if(props.size === "small"){
        size = "px-2 py-1"
    } else if(props.size === "medium"){
        size = "px-4 py-2"
    } else{
        size = "px-2 py-2"
    }

    return (
        <button onClick={props.onClick} 
        type='button' 
        className={`text-gray-500 rounded-[6px] ${props.disabled? 'bg-purple-700' : ' '}
        ${props.primary? 'bg-purple-700' : 'bg-gray-200'}`}
        disabled={props.disabled}
        >
            {props.label}
            <style jsx>{`
            button {
                background-color:${props.backgroundColor}
            }
            `}</style>
            
        </button>
    )
}

export default ButtonLogin
