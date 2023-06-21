import React, { useState } from 'react'
import './assets/styles/main.scss'
import Sidebar from './cmps/sidebar/Sidebar'
import FeedIndex from './views/FeedIndex'
import NewsIndex from './views/NewsIndex'

function App() {
    const [topBarOption, settopBarOption] = useState('Home')

    const handleSidebarOptionClick = (topBarOption: string) => {
        settopBarOption(topBarOption)
    }

    return (
        <div className="app-container">
            <Sidebar onOptionChange={handleSidebarOptionClick} />
            <FeedIndex topBarOption={topBarOption} />
            <NewsIndex />
        </div>
    )
}

export default App
