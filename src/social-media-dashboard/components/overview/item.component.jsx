import React,{useContext} from 'react';

import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import youtube from '../../images/icon-youtube.svg';
import instagram from '../../images/icon-instagram.svg';
import iconDown from '../../images/icon-down.svg';
import iconUp from '../../images/icon-up.svg';

import {ThemeContext} from '../theme-context';

const OverviewItem =({count, icon, category, percentage, status})=>{
    const {itemBg, mainText, subText} = useContext(ThemeContext);

    const icons = {
        iconUp: iconUp,
        iconDown: iconDown,
        facebook: facebook,
        twitter: twitter,
        youtube: youtube,
        instagram: instagram
    }

    return(
        <div className={`w-64 ${itemBg} rounded leading-none mb-6`}>
            <div className="flex justify-between items-center px-4 py-6 mb-2">
                <div className={`text-sm text-${subText} font-bold`}>{category}</div>
                <img className="w-4 h-4" src={icons[icon]} alt="icon"/>
            </div>
            <div className="flex justify-between items-center px-4 py-6">
                <div className={`text-${mainText} text-3xl font-bold`}>{count}</div>
                <div className="flex justify-center items-center">
                    <img src={icons[status]} alt="status"/>
                    <div className={`text-${status === 'iconUp' ? 'green' : 'red'}-700 font-bold`}>{percentage}</div>
                </div>
            </div>
        </div>
    )
}

export default OverviewItem;
