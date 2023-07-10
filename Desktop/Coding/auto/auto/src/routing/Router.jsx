import {Routes, Route} from 'react-router-dom'
import {HomePage} from '../pages/HomePage'
import {DefaultLayout} from '../pages/Layout'
import { CarDetails } from '../pages/CarDetails'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<HomePage />}/>
                <Route path='/cars/:carIdString' element={<CarDetails/>}/>
            </Route>
            
        </Routes>
    )
}