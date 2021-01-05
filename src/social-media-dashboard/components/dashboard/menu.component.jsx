import React,{useState} from 'react';

import DashboardItem from './item.component';
import {DASHBOARD_DATA} from './data';

const DashboardMenu=()=>{
    const [data] = useState(DASHBOARD_DATA);

    return(
        <div className="flex flex-wrap items-center justify-evenly w-full max-w-6xl">
            {
                data.map( datum =>{
                    return (
                        <DashboardItem key={datum.id} {...datum}/> 
                    )
                })
            }
        </div>
    )
}

export default DashboardMenu;