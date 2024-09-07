import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BrowseUsers from './BrowseUsers'
import User from './User'

export default function Users() {
    return (
        <Routes>
            {/* <Route path={`/about`} element={<About />}/> */}
            <Route path="/:id" element={<User />}/>
            <Route path="/" element={<BrowseUsers />}/>
        </Routes>
    )
}
