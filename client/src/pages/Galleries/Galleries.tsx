import { Route, Routes } from 'react-router-dom'
import BrowseGalleries from './BrowseGalleries'
import Gallery from './Gallery'

export default function Galleries() {
    return (
        <Routes>
            {/* <Route path={`/about`} element={<About />}/> */}
            <Route path="/:id" element={<Gallery />}/>
            <Route path="/" element={<BrowseGalleries />}/>
        </Routes>
    )
}
