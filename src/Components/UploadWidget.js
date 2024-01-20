import { useEffect, useRef } from 'react';

const UploadWidget = (props) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dnurzyftz',
            uploadPreset: 'uw_test',
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                props.onImageUpload(result.info.secure_url);
            }
        });
    },)

    return (
        <button onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    )
}

export default UploadWidget;