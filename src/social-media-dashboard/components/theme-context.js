import React,{useState, createContext} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider =(props)=>{
    const [toggle, setToggle] = useState(true);

    const [componentBg, setComponentBg] = useState('bg-indigo-900');
    const [itemBg, setItemBg] = useState('bg-indigo-800');
    const [switchBg, setSwitchBg] = useState('bg-green-500');
    const [switchKnob, setSwitchKnob] = useState('bg-blue-900');
    const [mainText, setMainText] = useState('white')
    const [subText, setSubText] = useState('indigo-500')
    const setTheme =()=>{
        if(!toggle){
            setComponentBg('bg-indigo-900')
            setItemBg('bg-indigo-800')
            setSwitchBg('bg-green-500')
            setSwitchKnob('bg-blue-900')
            setMainText('white')
            setSubText('indigo-500')
        }else{
            setComponentBg('bg-white')
            setItemBg('bg-indigo-100')
            setSwitchBg('bg-gray-500')
            setSwitchKnob('bg-white')
            setMainText('black')
            setSubText('indigo-900')
        }
    }

    return (
        <ThemeContext.Provider value={{toggle, setToggle, setTheme, componentBg, itemBg, switchKnob, switchBg, mainText, subText}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;



