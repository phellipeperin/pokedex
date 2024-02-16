export const loadFromSessionStorage = (key: string, defaultValue: any = ''): any => {
    const savedValue = window.sessionStorage.getItem(key);
    if (savedValue) {
        return JSON.parse(savedValue);
    }
    return defaultValue;
};

export const saveToSessionStorage = (key: string, value: any): void => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
};
