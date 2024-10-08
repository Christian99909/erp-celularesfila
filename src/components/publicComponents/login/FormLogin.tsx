import {ButtonLogin} from './ButtonLogin';
import Alerta from './Alerta';
import useLogin from '../../../hooks/useLogin';


const FormLogin: React.FC = () => {

    const {email, setEmail, password, setPassword, alerta, handleSubmit} = useLogin();
   
    return (
        <>
        {alerta.mensaje && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit} className='space-y-4 m-4 justify-center w-5/6 md:w-full'>
            <div className='flex flex-col'>
                <label htmlFor="email" className="text-[#DBFF5E] text-left text-lg m-1 font-sans font-bold">Correo electrónico:</label>
                <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Ingrese su correo electrónico" className=' rounded md:w-4/5 m-1 p-1'  />
            </div>
            <div className='flex flex-col '>
                <label htmlFor="password" className="text-[#DBFF5E] text-left text-lg m-1 font-sans font-bold">Contraseña:</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Ingrese su contraseña" className='rounded md:w-4/5 m-1 p-1' />
            </div>
        <ButtonLogin name="Iniciar Sesión"/> 
        </form>
        </>
    );

    
};

export default FormLogin;