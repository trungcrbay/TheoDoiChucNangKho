
'use client'
import Image from 'next/image'
import { SubmitHandler, useForm } from "react-hook-form"
import clsx from "clsx";
import { useEffect, useState } from 'react';
import Button from '@/component/atoms/Button';
import Logo from '@/component/atoms/Logo';

interface IFormInputs {
    email: string
    password: string
}
//One of the key concepts in React Hook Form is to register your component into the hook.
//Note: Each field is 'required' to have a name as a key for the registration process.


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>()

    const [token, setToken] = useState<string>('')

    const fetchLogin = async (email: string, password: string) => {
        const res = await fetch('http://localhost:8081/api/v1/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json();

        console.log("check data:", data.DT)
        setToken(data.DT.access_token);

    }

    useEffect(() => {
        localStorage.setItem('storedToken', token)
    }, [token])

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        const { email, password } = data; // Destructure form data
        fetchLogin(email, password);
    }


    return (
        <div className="bg-[url('../public/image-bg.png')] h-screen  bg-cover bg-center">
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <form className="max-w-1/2 w-form mx-auto bg-white rounded-md p-8 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
                    <Logo width={120} height={100} className='mx-auto'/>
                    <div className="mb-5 mt-8">
                        <input id="email"
                            // onChange={(e) => setEmail(e.target.value)}
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: 'Số điện thoại hoặc CCCD chưa chính xác!',
                                },
                            })}
                            className={clsx("bg-gray-50 outline-green-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                {
                                    "outline-red-300": errors.email?.type === "pattern"
                                })}
                            placeholder="Số điện thoại hoặc CCCD"
                        />
                        {errors.email?.type === "pattern" && (
                            <p role="alert" className='text-red-300'>{errors.email.message}</p>
                        )}
                    </div>
                    <div className="mb-5">
                        <input type="password" id="password" className={clsx("bg-gray-50 outline-green-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                            {
                                "outline-red-300": errors.password?.type === "minLength"
                            })} required
                            placeholder='Mật khẩu'
                            // onChange={(e) => setPassword(e.target.value)}
                            {...register("password", { required: true, maxLength: 20, minLength: 5 })}
                        />
                        {errors.password?.type === "minLength" && (
                            <p role="alert" className='text-red-300'>Cần nhập ít nhất 6 ký tự</p>
                        )}

                    </div>
                    <div className="flex items-center mb-5">
                        <div className="flex items-center  h-5">
                            <input id="remember" type="checkbox" value="" className="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label htmlFor="remember" className="text-base ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lưu mật khẩu</label>
                    </div>
                    <Button
                        onClick={() => console.log('11')}
                        className={''}
                        type={'button'}
                        title={'Open modal'}
                        disabled={false}
                    >
                        Đăng nhập
                    </Button>

                    <div className='text-center mt-4 mb-4 text-sm mb-10'>
                        <a href='#' className='text-blue-700'>Quên mật khẩu</a>
                    </div>
                    <hr></hr>
                    <button type="submit" style={{ width: '100%', border: '1px solid #F87272', color: '#F87272' }} className="mt-8 text-white bg-white hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Tạo tài khoản
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
