import useController from './controller';
import { Link } from 'react-router-dom';

export default function OtpCode() {
    const controller = useController();
    const inputs = ['otp-1', 'otp-2', 'otp-3', 'otp-4', 'otp-5', 'otp-6'];

    return (
        <div className="min-h-screen w-full flex justify-center md:items-center">
            <div className="grid grid-cols-1 gap-8 min-h-full py-10 px-4 md:rounded-sm md:px-8 md:py-20 md:shadow-md md:border-[1px]">
                <div className='flex flex-col min-w-[200px] max-w-[300px] md:gap-6 justify-between'>
                    <div className='flex flex-col w-full gap-4'>
                        <div className='flex items-center justify-center'>
                            <p className="text-4xl tracking-wide text-blue-950 font-bold uppercase">Free Space</p>
                        </div>
                        <div className='w-full'>
                            <p className='font-medium text-center text-blue-950 text-2xl leading-7'>Te hemos enviado un código por correo electrónico</p>
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <p className='text-sm text-gray-600'>
                                Para completar la configuración de tu cuenta, introduce el código que te hemos enviado a:
                            </p>
                            <p className='text-md text-gray-800 font-bold'>example@gmail.com</p>
                        </div>
                        <div className='w-full grid grid-cols-6 gap-4'>
                            {
                                inputs.map((value, ind) => {
                                    const ref = ind + 1;
                                    return (
                                        <input
                                            key={value}
                                            ref={(element) => (controller.inputRefs[ind] = element)}
                                            onKeyDown={controller.handleKeyDown}
                                            pattern='[0-9]'
                                            value={controller.otpCode[ref]}
                                            onChange={controller.handleChange}
                                            id={value}
                                            name={value}
                                            type="text"
                                            className='px-3 bg-white border-[2px] py-3 rounded-md'
                                        />
                                    )
                                })
                            }
                        </div>

                        <div className='w-full'>
                            <button className='bg-blue-950 px-3 py-2 text-white w-full text-sm rounded-sm'>Verificar</button>
                        </div>

                        <div className='w-full text-center'>
                            <Link to="#!" className='text-blue-600 text-sm'>¿No has recibido ningun código? Volver a enviarlo</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <hr className='border-gray-300' />
                        <div className='w-full text-center flex flex-col gap-2'>
                            <p className='uppercase font-bold text-gray-500'>Free Space</p>
                            <p className='text-xs text-gray-600'>Esta página esta protegida por reCAPTCHA y se aplican la <Link to="#!" className='text-blue-500'>Política de privacidad</Link> y las <Link to="#!" className='text-blue-500'>Condiciones del servicio</Link> de Google.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}