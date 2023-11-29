import { useState } from "react";

function Contacto() {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [consulta, setConsulta] = useState('');
    const [msj, setMsj] = useState('');

    const enviarConsulta = (e) => {
        e.preventDefault();
        if (nombre.trim() !== "" && correo.trim() !== "" && consulta.trim() !== "") {
            setNombre('');
            setCorreo('');
            setConsulta('');
            setMsj('Consulta enviada, nos comunicaremos a la brevedad')
            setTimeout(() => {
                setMsj('');
            }, 2000);
        } else {
            setMsj('Por favor complete todos los campos')
            setTimeout(() => {
                setMsj('');
            }, 2000);
        }
        
    }

    return ( 
        <>

            <div className="p-2 m-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-center">

                <h2 className="text-5xl p-2">Contacta con nosotros</h2>

                <div className="m-2 p-2 text-xl">

                    <div>Querés trabajar con nosotros? Envia tu CV a: servitrrhh@servit.com</div>
                    <div>Atención telefónica desde Argentina 011-XXXXXXXX / Internacional +5411-XXXXXXXX</div>
                    <div>Encontranos en calleficticia XXX - Neuquen Capital - L a V 8:00 y las 18:00</div>

                </div>
                <div>

                    <form onSubmit={enviarConsulta} className="m-2 p-2">
                        <div>
                            <input
                                className="m-2 p-2"
                                type="text"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Correo Electrónico"
                                className="m-2 p-2"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>
                        <textarea
                            placeholder="Consulta"
                            cols="25"
                            rows="5"
                            className="m-2 p-2"
                            value={consulta}
                            onChange={(e) => setConsulta(e.target.value)}
                        >
                        </textarea>
                        <div><button type="submit" className="bg-green-300 font-bold m-2 py-2 px-4 rounded">Enviar Consulta</button></div>

                    </form>

                    <div className="text-xl p-2 m-2 text-white font-bold">{msj}</div>

                </div>
                
            </div>

        </>
     );
}

export default Contacto;