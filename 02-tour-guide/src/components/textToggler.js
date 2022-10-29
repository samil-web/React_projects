import React, { useContext } from 'react'

import textContext from '../context/textContext'

const textToggler = () => {
    const [text, setText] = useContext(textContext)
    return (
        <div
            onClick={() => {
                setText(text === "Show" ? "Hide" : "Show")
            }}
        >
            <button>{theme === "Show" ? "Show Less" : "Show More"}</button>
        </div>
    )
}

export default textToggler
