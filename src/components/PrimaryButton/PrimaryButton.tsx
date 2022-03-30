import React from 'react'
import './PrimaryButton.scss'

interface Props {
    onClick: () => void
}

const PrimaryButton: React.FC<Props> = ({ onClick, children }) => {
    return (
        <div className="primary-button" onClick={onClick}>
            {children}
        </div>
    )
}


export default PrimaryButton