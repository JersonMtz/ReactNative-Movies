import React, { createContext, useState } from 'react';
import { StatusBar } from 'react-native';

interface PropsContext {
    nowColors: colorImage;
    nextColors: colorImage;
    nowFnColor: (value: colorImage) => void;
    nextFnColor: (value: colorImage) => void;
}

interface colorImage {
    primary: string;
    secondary: string;
}

export const GradientContext = createContext({} as PropsContext);

export const GradientProvider = ({ children }: any) => {

    const [nowColor, _setNowColor] = useState<colorImage>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const [nextColor, _setPrevColor] = useState<colorImage>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setNowColor = (value: colorImage) => _setNowColor(value);

    const setNextColor = (value: colorImage) => _setPrevColor(value);

    return (
        <GradientContext.Provider value={{
            nowColors: nowColor,
            nowFnColor: setNowColor,
            nextColors: nextColor,
            nextFnColor: setNextColor
        }}>
            <StatusBar 
                barStyle={ nextColor.primary !== 'transparent'?'light-content':'dark-content' } 
                backgroundColor={ nextColor.primary } />
            { children }
        </GradientContext.Provider>
    );
}