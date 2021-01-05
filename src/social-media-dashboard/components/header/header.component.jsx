import React,{useContext} from 'react';

import ThemeSwitch from './theme-switch.component'
import {ThemeContext} from '../theme-context';

const DashboardHeader=()=>{
    const {componentBg, mainText, subText} = useContext(ThemeContext);

    return(
        <div className={`w-full h-64 ${componentBg} flex justify-center items-start`}>
            <div className="w-full md:max-w-6xl flex md:flex-row flex-col justify-between md:items-center items-between mt-8 px-32 md:px-6">
                <div className="mb-4">
                    <h1 className={`font-bold text-${mainText} text-xl md:text-2xl`}>Social Media Dashboard</h1>
                    <p className={`text-${subText} text-sm`}>Total Followers: 23,004</p>
                </div>
                <div className="flex justify-between md:justify-center items-center">
                    <div className={`text-${subText} text-sm mr-2`}>Dark mode</div>
                    <ThemeSwitch/>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader;