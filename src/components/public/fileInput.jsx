import React from 'react'

const FileInput = ({onFile, className}) => {
    const handleChange = (e) => {
        const file = e.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            onFile(reader.result, file);
        }
        reader.readAsDataURL(file);
    }
    return <input className={`${className}`} type="file" onChange={handleChange} />
}

export default FileInput