
const FileInput = ({onFile, className}) => {
    const handleChange = (e) => {
        const file = e.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onFile(reader.result, file);
        }
    }
    return <input className={`${className}`} type="file" onChange={handleChange} />
}

export default FileInput