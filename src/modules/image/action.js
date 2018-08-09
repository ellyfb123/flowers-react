import epicCreator from '../../utils/epicsCreator';
import { uploadFile } from '../../apis/uploadFile';

export const uploadImage = (progressPercentage, file) => ({ type: 'UPLOAD_IMAGE', payload: { progressPercentage, file } });

const uploadImageEpic = epicCreator(
    'UPLOAD_IMAGE',
    uploadFile,
);

export const epic = [
    uploadImageEpic,
];