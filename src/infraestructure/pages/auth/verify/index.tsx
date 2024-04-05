import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export default function Verify() {
    return (
        <div className="min-h-screen w-full flex justify-center md:items-center">
            <div className="grid grid-cols-1 gap-8 min-h-full py-10 px-4 md:rounded-sm md:px-8 md:py-20 md:shadow-md md:border-[1px]">
                <div className='flex flex-col gap-4 min-w-[200px] max-w-[300px] md:gap-6'>
                    <div className='flex items-center justify-center'>
                        <p className="text-4xl tracking-wide text-blue-950 font-bold uppercase">Free Space</p>
                    </div>
                    <div className='w-full px-5 flex flex-col gap-2'>
                        <p className='font-semibold text-center text-blue-950 text-sm'>Consulta la bandeja de entrada para iniciar sesión</p>
                        <EnvelopeIcon className='text-blue-950 w-full h-20' />
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <p className='text-xs text-gray-600 tracking-wide'>
                            Para completar la configuración e iniciar sesión, haz clic en el enlace de verificación que te hemos enviado a
                        </p>
                        <p className='font-semibold text-sm'>example@gmail.com</p>
                    </div>

                    <div className='w-full px-2 text-center'>
                        <Link to="/auth/login" className='text-blue-600 text-xs font-medium tracking-wide'>Reenviar correo electrónico de verificación</Link>
                    </div>


                    <hr className='border-gray-300' />
                    <div className='w-full text-center flex flex-col gap-2'>
                        <p className='uppercase font-bold text-gray-500'>Free Space</p>
                    </div>
                </div>
            </div>

        </div>
    )
}