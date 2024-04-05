import useController from './controller';
import { Link } from 'react-router-dom';

export default function Login() {
    const controller = useController();
    return (
        <div className="min-h-screen w-full flex justify-center md:items-center">
            <div className="grid grid-cols-1 gap-8 min-h-full py-10 px-4 md:rounded-sm md:px-8 md:py-20 md:shadow-md md:border-[1px]">
                <div className='flex flex-col gap-4 min-w-[200px] max-w-[300px] md:gap-6'>
                    <div className='flex items-center justify-center'>
                        <p className="text-4xl tracking-wide text-blue-950 font-bold uppercase">Free Space</p>
                    </div>
                    <div className='w-full'>
                        <p className='font-semibold text-center text-blue-950'>Inicia sesión para continuar</p>
                    </div>
                    <div className='w-full'>
                        <div className='relative'>
                            <input
                                value={controller.formik.values.email}
                                onChange={controller.formik.handleChange('email')}
                                onBlur={controller.formik.handleBlur('email')}
                                type="text"
                                name="email"
                                id="email"
                                className='px-3 py-2 border-[2px] border-gray-300 rounded-sm text-sm font-light w-full placeholder:text-gray-500 placeholder:font-normal placeholder:tracking-normal'
                                placeholder='Introduce tu correo electrónico'
                            />
                            {
                                controller.formik.errors.email && controller.formik.touched.email && <p className='absolute text-xs'>{controller.formik.errors.email}</p>
                            }
                        </div>
                    </div>
                    <div className='w-full'>
                        <p className='text-xs text-gray-600'>
                            Al registrarme, acepto las <Link className='text-blue-500' to="#!">Condiciones del Servicio</Link> de Free Space y su <Link className='text-blue-500' to="#!">Política de privacidad</Link>.
                        </p>
                    </div>

                    <div className='w-full'>
                        <button
                            onClick={controller.handleContinue}
                            className='bg-blue-950 px-3 py-2 text-white w-full text-sm rounded-sm'>
                            Continuar
                        </button>
                    </div>

                    <div className='w-full text-center flex justify-between'>
                        <Link to="#!" className='text-blue-600 text-sm'>¿No puedes iniciar sesión?</Link>
                        <Link to="/auth/register" className='text-blue-600 text-sm'>Crea una cuenta</Link>
                    </div>

                    <hr className='border-gray-300' />
                    <div className='w-full text-center flex flex-col gap-2'>
                        <p className='uppercase font-bold text-gray-500'>Free Space</p>
                        <p className='text-xs text-gray-600'>Esta página esta protegida por reCAPTCHA y se aplican la <Link to="#!" className='text-blue-500'>Política de privacidad</Link> y las <Link to="#!" className='text-blue-500'>Condiciones del servicio</Link> de Google.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}