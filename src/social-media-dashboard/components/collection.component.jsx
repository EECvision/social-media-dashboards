import React,{useContext} from 'react';

import DashboardMenu from './dashboard/menu.component';
import DashboardOverview from './overview/menu.compoent';
import DashboardHeader from './header/header.component';

import {ThemeContext} from './theme-context';

const SocialMediaDashboadCollection =()=>{
    const {componentBg} = useContext(ThemeContext);

    return(
        <div className={`relative flex flex-col items-center ${componentBg}`}>
            <DashboardHeader/>
            <div className="transform -translate-y-24">
                <DashboardMenu/>
                <div className="mt-12"></div>
                <DashboardOverview/>
            </div>
        </div>
    )
}

export default SocialMediaDashboadCollection;