import {FC} from "react"
import {Link, NavLink} from "react-router-dom";
import { FaRadiationAlt, FaSignOutAlt } from "react-icons/fa";

const Header: FC = () => {
    const isAuth = false
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
                    <button className='btn btn-red'>
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