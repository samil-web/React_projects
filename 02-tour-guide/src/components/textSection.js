import React, { useContext } from 'react'
import textContext from '../Context/textContext'
import DefaultContext from '../DefaultContext'

const textSection = () => {
    const text = useContext(textContext)[0]
    const currentText = DefaultContext[text]
    return (
        <div
            style={{

                height: "300px",
                backgroundColor: "#FFFFFF",

            }}
        >
            <button
                style={{

                    width: "200px",
                    whiteSpace: "nowrap",
                    overflow: hidden,
                    textOverflow: ellipsis

                }}
            >Click to show/hide</button>
        </div>
    )
}

export default textSection
