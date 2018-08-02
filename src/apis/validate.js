export const getValidate = () => {
    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
    };
    const finalConfig = {
        headers,
        ...{method: 'GET'},
    };
    console.log('getValidate');
    return fetch('http://localhost:8080/validate', finalConfig)
        .then(response => response.json()).then((json) => {throw json;});
};