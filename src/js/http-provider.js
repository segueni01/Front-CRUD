'use strict';

const urlAPI = 'https://reqres.in/api/users';


const obtenerUsuarios = async() => {
    try {

        const respuesta = await fetch (`${urlAPI}?page=1`);
        const { data: usuarios } = await respuesta.json();

        return usuarios;

    } catch (error) {

        throw error;

    }
};

export{
    obtenerUsuarios 
};