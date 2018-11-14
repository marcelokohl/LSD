const prefix = "LSD_KEY_";

export const getItem = key => {
    return JSON.parse(window.localStorage.getItem(`${prefix}${key}`));
}  

export const setItem = (key, value) => {
    return window.localStorage.setItem(`${prefix}${key}`, JSON.stringify(value));
}

export const removeItem = key => {
    window.localStorage.removeItem(`${prefix}${key}`);
}

export default {
    getItem,
    setItem,
    removeItem,
}