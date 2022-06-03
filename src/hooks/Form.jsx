import React, { useState } from 'react';

const Form = ( initialState = {}) => {
   
    const [data, setData] = useState(initialState);

    const reset = () => setData(initialState);

    const handleChange = ({target}) => setData({
        ...data,
        [target.name]: target.value
    })

    const uploadImg = url => setData({
        ...data,
        img:url
    })

    return [data, reset, handleChange, uploadImg]
};

export default Form;