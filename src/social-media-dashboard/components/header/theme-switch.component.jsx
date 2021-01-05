import React,{ useContext} from 'react';
import {ThemeContext} from '../theme-context';

const ThemeSwitch=()=>{
    const {toggle, setToggle, setTheme, switchBg, switchKnob} = useContext(ThemeContext)

    const handleClick=()=>{
        setToggle(!toggle)
        setTheme()
    }
    return(
        <div className={`relative ${switchBg} w-10 h-5 rounded-xl flex items-center`}>
            <div onClick={handleClick}  className={`absolute ${switchKnob} w-4 h-4 rounded-full cursor-pointer transition duration-300 ease-in transform ${toggle ? 'translate-x-0' : 'translate-x-6'}`}></div>
        </div>
    )
}

export default ThemeSwitch;