const uuidv1 = require('uuid/v1');
const uuid = uuidv1();
const xhr = new XMLHttpRequest();

const futch = (url, opts, onProgress, progressPercentageFunc) => new Promise((res, rej) => {
    xhr.open(opts.method, url);
    Object.keys(opts.headers).forEach((key) => {
        xhr.setRequestHeader(key, opts.headers[key]);
    });
    xhr.onload = e => res(JSON.parse(e.target.responseText));
    xhr.onerror = rej;
    if (xhr.upload && onProgress) {
        xhr.upload.onprogress = onProgress(progressPercentageFunc);
    };
    xhr.send(opts.body);
});

const onProgress = updateFunc => (event) => {
    if (event.lengthComputable) {
        updateFunc(((event.loaded / event.total) * 100).toFixed(0));
    }
};

export const uploadFile = ({ updateFunc, file }) => {
    const data = new FormData();
    data.append('file', file);
    const opts = {
        method: 'post',
        headers: {
            Accept: '*/*',
            'X-Correlation-Id': uuid,
            'X-Client-Version': '1',
        },
        body: data,
    };
    return futch('http://localhost:8080/images', opts, onProgress, updateFunc);

}

export const cancelUploadFile = () => { xhr.abort(); };