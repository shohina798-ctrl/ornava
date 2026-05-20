import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
export const postRestoration = async ({ file, mode, useAi }) => {  
    const formData = new FormData();

    formData.append('Image', file);
    formData.append('Mode', String(mode));
    formData.append('UseAi', useAi);

    const response = await axios.post(
        `${API_URL}/api/restorations`,
        formData
    );

    return response.data;
};