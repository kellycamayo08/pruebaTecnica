import axios from 'axios';
import React from 'react';

const File = async(file) => {
    const cloudUrl = "https://api.cloudinary.com/v1_1/kellycamayo/upload";
    const formData = new FormData();
    formData.append('upload_preset', 'prueba');
    formData.append('file', file)

    const resp = await fetch(cloudUrl, {
        method:'POST',
        body : formData
    });

    const cloudResp = await resp.json();
    return cloudResp.secure_url

};

export default File;