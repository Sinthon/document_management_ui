const getItem = function(key) {
    var data = localStorage.getItem(key) ?  JSON.parse(localStorage.getItem(key)) : [{}];
    return data;
}

const setItem = function(key, value) {
    localStorage.setItem(key,JSON.stringify(value));
}

const removeItem = function(key) {
    window.localStorage.removeItem(key)
}

export { getItem, setItem, removeItem }