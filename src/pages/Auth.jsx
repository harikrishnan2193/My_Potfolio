import React, { useState } from 'react'
import { loginApi } from '../service/allAPI';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    console.log(userData);

    //function for login
    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = userData
        if (!email || !password) {
            alert('Please enter all the fileds')
        }
        else {
            const result = await loginApi(userData)
            console.log(result.data);
            if (result.status === 200) {
                sessionStorage.setItem("token",result.data.token)
                setUserData({ email: '', password: '' })
                navigate('/update')
            }
        }
    }

    return (
        <>
            <div className='bg-custom-background mx-auto lg:px-lg-padding xl:px-xl-padding relative'>
                <div className='flex justify-center items-center text-black h-screen'>
                    <div className='w-1/4'>
                        <div className='p-8 bg-gray-300 rounded-lg'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/309/309492.png"
                                alt="no image"
                                className="mx-auto mb-4 w-14"
                            />
                            <h3 className='text-2xl font-bold text-center mb-4'>
                                Welcome hari
                            </h3>
                            <form action="">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Email</label>
                                    <input onChange={(e) => setUserData({ ...userData, email: e.target.value })} value={userData.email}
                                        type="email"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Password</label>
                                    <input onChange={(e) => setUserData({ ...userData, password: e.target.value })} value={userData.password}
                                        type="password"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <button onClick={handleLogin}
                                    type="submit"
                                    className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-700 transition"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth