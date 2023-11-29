
import { Outlet ,Link } from "react-router-dom";

function Layouts() {
    return ( 
        <>
            <div className="bg-indigo-400 text-white grid grid-cols-2">
                <h1 className="m-2 p-2 text-6xl">ServIT</h1>
                <ul className="m-2 p-2 flex justify-end">
                    <li className="p-4 hover:bg-amber-500 rounded-lg"> <Link to="/">Home</Link> </li>
                    <li className="p-4 hover:bg-amber-500 rounded-lg"> <Link to="/productos">Servicios</Link> </li>
                    <li className="p-4 hover:bg-amber-500 rounded-lg"> <Link to="/contacto">Contacto</Link> </li>
                </ul>
            </div>
            <Outlet/>
        </>
     );
}

export default Layouts;