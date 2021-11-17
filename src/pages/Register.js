function Login() {
    return (
        <div className="bg-gradient-to-r from-white via-white to-white bg-bg-img bg-cover h-almost flex flex-col items-center justify-center">
           <span className="text-5xl">Login</span>
            <form className="mt-5 flex flex-col">
                <label className="my-2.5">Email</label>
                <input className="p-2.5 border-none bg-white" type="text" placeholder="Enter your email..."/>

                <label className="my-2.5">Password</label>
                <input className="p-2.5 border-none bg-white" type="password" placeholder="Enter your password..."/>

                <button className="p-2 mt-5 cursor-pointer bg-red-500 border-none text-white rounded-xl">Login</button>
            </form>
            <button className="top-16 right-5 rounded-xl absolute bg-green-700 cursor-pointer border-none p-2 text-white">Register</button>

        </div>
    );
}

export default Login;