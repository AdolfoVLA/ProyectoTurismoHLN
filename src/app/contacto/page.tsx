"use client";
import React, { use, useMemo, useState } from "react";

const ContactoPage: React.FC = () => {

    const [nombre, setNombre] = useState<string>("");
    const [apellido, setApellido] = useState<string>("");
    const [provincia, setProvincia] = useState<number>(0);
    const [modalidad, setModalidad] = useState<number>(1);
    const [comentarios, setComentarios] = useState<string>("");
    const [centroTuristico, setCentroTuristico] = useState<number>(0);

    const ListaAtraccionesPorProvincia = [
        {
            idProvincia: "1",
            nombreProvincia: "Guanacaste",
            atracciones: [
                { id: 1, nombre: "RIU Palace" },
                { id: 2, nombre: "Planet Hollywood" },
                { id: 3, nombre: "Condovac" }
            ]
        },
        {
            idProvincia: "2",
            nombreProvincia: "Puntarenas",
            atracciones: [
                { id: 1, nombre: "Hotel Fiesta Resort" },
                { id: 2, nombre: "Hotel Crocs" },
                { id: 3, nombre: "Best Western Jaco Beach" }
            ]
        }
    ];

    function EnviarComentarios() {
        console.log(nombre, apellido, provincia, centroTuristico, modalidad, comentarios);

    }

    const atraccionesDisponibles = useMemo(()=>{
        const provinciaSeleccionada = ListaAtraccionesPorProvincia.find(
            (p) => Number(p.idProvincia)==provincia  
        );

        return provinciaSeleccionada ? provinciaSeleccionada.atracciones : [];
        
    },[provincia])

    return (
        <div className="flex flex-col justify-center items-center m-10 px-[50px] lg:px-[200px]" >
            <div className="grid md:grid-cols-2 md:gap-6 w-full">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_first_name"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="block p-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_first_name"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        className="block p-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 w-full mt-4">
                <div className="relative z-0 w-full mb-5 group">
                    <select value={provincia}
                        onChange={(e) => setProvincia(Number(e.target.value))}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value={0}>Seleccione una provincia</option>
                        
                        {
                            ListaAtraccionesPorProvincia.map((provinciaItem)=>(
                                <option key={provinciaItem.idProvincia} value={provinciaItem.idProvincia}>
                                    {provinciaItem.nombreProvincia}
                                </option>
                            ))
                       }
                    </select>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <select
                        value={centroTuristico}
                        disabled={provincia == 0}
                        onChange={(e) => setCentroTuristico(Number(e.target.value))}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                atraccionesDisponibles.map((atraccionesItem)=>(
                                <option key={atraccionesItem.id} value={atraccionesItem.id}>
                                    {atraccionesItem.nombre}
                                </option>
                                ))
                            }

                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 w-full mt-4">
                <div className="relative z-0 w-full mb-5 group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccione modalidad:</label>
                    <div className="flex items-center mb-4">
                        <input type="radio"
                            value={1}
                            checked={modalidad === 1}
                            onChange={() => setModalidad(1)}
                            name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Todo incluido</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio"
                            value={2}
                            checked={modalidad === 2}
                            onChange={() => setModalidad(2)}
                            name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Tiempo compartido</label>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consultas para la agencia:</label>
                <textarea
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deja tus comentarios"></textarea>
                <button onClick={EnviarComentarios}
                    className="mt-4 bg-blue-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            </div>



        </div>
    )
}

export default ContactoPage;