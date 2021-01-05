import React,{useState} from 'react';

import OverviewItem from './item.component';
import {OVERVIEW_DATA} from './data';


const OverviewMenu=()=>{
    const [data] = useState(OVERVIEW_DATA);

    return(
        <div className="w-full max-w-6xl">
            <div className="w-full pl-32 md:pl-6 font-bold text-xl text-white text-left mb-4">Overview Today</div>
            <div className="w-full flex flex-wrap justify-evenly items-center">
                {
                    data.map(datum =>{
                        return(
                            <OverviewItem key={datum.id} {...datum}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OverviewMenu;