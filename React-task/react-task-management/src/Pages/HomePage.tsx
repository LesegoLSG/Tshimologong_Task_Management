import React from 'react'
import NavBar from '../Components/NavigationBar/NavBar'
import About from '../Components/SinglePageContents/About'
import Contact from '../Components/SinglePageContents/Contact'
import EntryPage from '../Components/SinglePageContents/EntryPage'

const HomePage = () => {
    return (
        <>
            <NavBar />
            <EntryPage />
            <About />
            <Contact />
        </>
    )
}

export default HomePage