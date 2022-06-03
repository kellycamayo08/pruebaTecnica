import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { styledH2 } from '../styles/style';


const List = () => {

    const url = "https://prueba-bici.herokuapp.com/bicicletas"
    const [users, setUsers] = useState([])

    const getData = async () => {
        // console.log("get")
        const resp = await fetch(url);
        const data = await resp.json()
        setUsers(data)
       

    }

    const deleteBici = async id => {
        try {
            await axios.delete(`${url}/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }
    )


    return (
        <div>
       <h2 style={{textAlign:'center', margin:'50px'}}>Lista de Bicicletas</h2>
        <Table striped bordered hover >
          
            <thead>
            
                <tr>
                    <th>ID</th>
                    <th>TITULO</th>
                    <th>MARCA</th>
                    <th>MATERIAL</th>
                    <th>PRECIO</th>
                    <th>COLOR</th>
                    <th>TALLA</th>
                    <th>IMAGEN</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>

                {
                    users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.marca}</td>
                                <td>{user.material}</td>
                                <td>{user.precio}</td>
                                <td>{user.color}</td>
                                <td>{user.talla}</td>
                                <td><img src={user.img} width="30px" height="30px"></img></td>
                                <td><Button id={user.id} variant="danger" onClick={(e) => {deleteBici(e.target.id)}}>Eliminar</Button></td>
                            </tr>
                        )
                    })
                }


            </tbody>
        </Table>
        </div>
    );
};

export default List;