import {useEffect, useState} from "react";

function useLocalState (defaultValue, key) {
    const [value, setValue] = useState(() => {
        const localStorageValue = localStorage.getItem(key);
        if (localStorageValue !== null && localStorageValue !== "") {
            return JSON.parse(localStorageValue);
        }
        return defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}


export {useLocalState}