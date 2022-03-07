'use strict';

import { obtenerUsuarios } from "./http-provider";

const body = document.body;
let btnAgregar;
let tbody, divAgregar;
let contadorUsuarios = 1;

const crearHTML = () => {

    const html = `
        <h1 class="">Usuarios API reqgres.in</h1>
        <div id="divAgregar" class="d-block">
        </div>
        <div>
            <button class="d-block btn btn-primary" id="btnAdd">Nuevo usuario</button>
        </div>
        <table class="table table-striped mt-2">
            <thead class="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Avatar</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody class="tbody">
            </tbody>
        </table>`;

        const div     = document.createElement('div');
        div.innerHTML = html;
        body.appendChild( div );
        tbody = document.querySelector('.tbody');
        divAgregar = document.querySelector('#divAgregar');
        btnAgregar = document.querySelector('#btnAdd');

};


//FORMULARIO PARA CREAR USUARIOS
const divCrearUsuario = () =>{
    const html= `
    <form id="formAgregar">
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" id="inputName"placeholder="Ingresa el nombre">
        </div>
        <div class="form-group">
            <label>Job</label>
            <input type="text" class="form-control" id="inputJob" placeholder="Ingresa el trabajo">
        </div>
        <button type="submit" class="btn btn-primary mt-2">Crear</button>
    </form>
        `;
    
    const div = document.createElement('div');
    div.innerHTML = html;
    divAgregar.appendChild(div);

}

const crearTablaUsuarios = ( {email, first_name, last_name, avatar} ) =>{

    const html = `
        <td scope="col"> ${contadorUsuarios}. </td>
        <td scope="col"> ${email}</td>
        <td scope="col"> ${first_name}, ${last_name} </td>
        <td scope="col">
            <img class="rounded-circle w-50" src="${avatar}">
        </td>
        <td scope="col">
            <button class="btn btn-warning" type="button">Edit</button>
        </td>
        <td scope="col">
            <button class="btn btn-danger" type="button">Delete</button>
        </td>  
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.append( tr );
    contadorUsuarios++;

};

//EVENTOS

// btnAgregar.addEventListener('click', ()=>{
//     divCrearUsuario();
// })


export const init = async() =>{
    crearHTML();
    // divCrearUsuario();
    const usuarios = await obtenerUsuarios();
    usuarios.forEach(usuario => {
        crearTablaUsuarios(usuario);
    });
    
}