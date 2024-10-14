import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


export const ButtonGoogle = () => {
    return (
        <button className="flex items-center justify-center bg-white text-black rounded-full py-2 px-20 mb-4">
            <FcGoogle className="mr-2" size={20} />
            <span>Sign up with Google</span>
        </button>


    )
}

export const ButtonApple = () => {
    return (
        <button className="flex items-center justify-center bg-white text-black rounded-full py-2 px-20 mb-4 ">
            <FaApple className="mr-2" size={20} />
            <span>Sign up with Apple</span>

        </button>


    )
}
export const ButtonCreateAccount = () => {
    return (
        <button className="bg-blue-500 text-white rounded-full py-2 px-20 mb-4">Create Account</button>

    )
}








