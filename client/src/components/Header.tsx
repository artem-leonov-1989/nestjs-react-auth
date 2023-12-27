import {FC} from "react"
import {Link, NavLink, useNavigate} from "react-router-dom";
import { FaRadiationAlt, FaSignOutAlt } from "react-icons/fa";
import {useAuth} from "../hooks/useAuth.ts";
import {useAppDispatch} from "../store/hooks.ts";
import {logout} from "../store/user/userSlice.ts";
import {removeTokenFromLocalStorage} from "../helpers/localstorage.helper.ts";
import {toast} from "react-toastify";

const Header: FC = () => {
    const isAuth = useAuth()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        dispatch(logout())
        removeTokenFromLocalStorage('access_token')
        toast.success('You logged out')
        navigate('/')
    }
    return (
        <header className='flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm'>
            <Link to="/">
                <FaRadiationAlt size="30px"/>
            </Link>

            {
                isAuth && (
                    <ul className="ml-auto mr-10 flex items-center gap-5">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                    </ul>
                )
            }
            {
                isAuth ? (
                    <button className='btn btn-red' onClick={logoutHandler}>
                        <span>Log Out</span>
                        <FaSignOutAlt />
                    </button>
                ) : (
                    <Link className='py-2 text-white/50 hover:text-white ml-auto' to={'auth'}>
                        Log In / Sign In
                    </Link>
                )
            }
        </header>
    )
}

export default Header