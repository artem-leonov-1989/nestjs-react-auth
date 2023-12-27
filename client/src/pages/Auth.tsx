import {FC, useState} from "react"

const Auth: FC = () => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPasword] = useState('')
    const [isLogin, setIsLogin] = useState<boolean>(false)
    return (
        <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
            <h1 className='text-center text-xl mb-10'>
                {isLogin ? 'Login' : 'Registration'}
            </h1>

            <form className="flex w-1/3 flex-col mx-auto gap-5">
                <input
                    type="text"
                    className='input'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                {
                    !isLogin ?
                        (
                            <input
                                type="text"
                                className="input"
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        ) :
                        ''
                }
                <input
                    type="password"
                    className='input'
                    placeholder='Password'
                    onChange={(e) => setPasword(e.target.value)}
                />

                <button className="btn btn-green mx-auto">Submit</button>
            </form>

            <div className="flex justify-center mt-5">
                {
                    isLogin ? (
                        <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-slate-300 hover:text-white">
                            You don't have an account?
                        </button>
                    ) : (
                        <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-slate-300 hover:text-white">
                            Already have an account?
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Auth