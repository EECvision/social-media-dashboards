import React,{useContext} from 'react';

import iconDown from '../../images/icon-down.svg';
import iconUp from '../../images/icon-up.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import youtube from '../../images/icon-youtube.svg';
import instagram from '../../images/icon-instagram.svg';

import {ThemeContext} from '../theme-context';

const DashboardItem =({id, icon, name, category, count, current, status})=>{

    const {itemBg, mainText, subText} = useContext(ThemeContext);

    const icons = {
        iconUp: iconUp,
        iconDown: iconDown,
        facebook: facebook,
        twitter: twitter,
        youtube: youtube,
        instagram: instagram
    }

    const borderColor = ['indigo', 'indigo', 'yellow', 'red']

    return (
        <div className={`flex flex-col items-center justify-evenly w-64 py-6 mb-6 lg:mb-0 ${itemBg} rounded border-t-4 border-${borderColor[id-1]}-700`}>
            <div className={`flex justify-center items-center text-${subText} mb-6`}>
                <img className="w-4 h-4 mr-1" src={icons[icon]} alt="icon"/>
                <div className=" text-xs">{name}</div>
            </div>
            <div className="flex flex-col items-center mb-6">
                <div className={`font-bold text-5xl text-${mainText} leading-none`}>{count}</div>
                <div className={`text-${subText} tracking-widest text-lg`}>{category}</div>
            </div>
            <div className="flex justify-center items-center">
                <img src={icons[status]} alt="status"/>
                <div className={`text-${status==='iconUp' ? 'green' : 'red'}-500 font-bold`}>{current}</div>
            </div>
        </div>
    )
}

export default DashboardItem;