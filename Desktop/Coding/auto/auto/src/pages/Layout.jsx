import { Outlet } from 'react-router-dom'
import Home from '../componentes/Home.jsx'


export function DefaultLayout() {
    return (
        <div>
            <Home />
            <Outlet />
        </div>
    )
}