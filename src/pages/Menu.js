import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'

import '../styles/Menu.css'

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Notre carte</h1>
            <div className='menuList'>
                {MenuList.map((item, index) => {
                    return <MenuItem key={index} image={item.image} name={item.name} price={item.price} />
                })}
            </div>
        </div>
    )
}

export default Menu