import axios from 'axios';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import File from '../helpers/File';
import Form from '../hooks/Form';
import { Container, Input, Label, StyledH1 } from '../styles/style';

const Regis = () => {

    const url = "https://prueba-bici.herokuapp.com/bicicletas"

    const [data, reset, handleChange,uploadImg] = Form({
        title: "",
        marca: "",
        material: "",
        precio: "",
        color: "",
        talla: "",
        img: ""
    })

    const handleImg = ({ target}) => {
        const file = target.files[0];
        File(file)
        .then( resp => uploadImg (resp))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, data)
        .then ( () => reset())
        alert('Registrado Correctamente')
    }

    useEffect(() => {
        console.log(data)

    }, [data])



    return (
        <div>

            <StyledH1>Registrar Bicicleta</StyledH1>
            <Container onSubmit={handleSubmit}>
                <Label>Titulo</Label>
                <Input
                    name='title'
                    onChange={handleChange}
                    value={data.title} />

                <Label>Marca</Label>
                <Input
                    name='marca'
                    onChange={handleChange}
                    value={data.marca}  />

                <Label>Material</Label>
                <Input
                    name='material'
                    onChange={handleChange}
                    value={data.material}  />

                <Label>Precio</Label>
                <Input
                    name='precio'
                    onChange={handleChange}
                    value={data.precio}  />

                <Label>Color</Label>
                <Input
                    name='color'
                    onChange={handleChange}
                    value={data.color}  />
                <Label>Talla</Label>
                <Input
                    name='talla'
                    onChange={handleChange}
                    value={data.talla}  />

                <Label>Imagen</Label>
                <Input type="file" name="img" onChange={handleImg} />

                <Button variant="primary" type='submit'>Registrar</Button>
            </Container>
        </div>
    );
};

export default Regis;