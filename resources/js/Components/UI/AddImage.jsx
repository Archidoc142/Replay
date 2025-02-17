import { useState } from 'react';
import Image from '../Common/Image';

export default function AddImage({filename, setFilename, title, className, onFileUpload }) {
    const [imgSrc, setImgSrc] = useState("/img/placeholder_img.png");

    function upload(e) {
        const file = e.target.files[0];
        if (file && file.type.includes("image/")) {
            onFileUpload(file)
            setImgSrc(URL.createObjectURL(file));
            setFilename(file.name);
        } else {
            alert("Fichier invalide.");
        }
    }

    return (
        <div className={'border-black border-4 rounded-lg overflow-hidden bg-[#23252b] h-full w-[50%] max-w-[50%] flex flex-col items-center ' + className}>
            <Image isExpandable={true} className="h-60 m-auto w-auto max-h-40" src={imgSrc} alt="Image sélectionnée" />
            {filename ? <p className="w-full text-lg text-center bg-gray-700 py-1">{filename}</p> : null}

            <div className="bg-[#7A163C] py-2 px-2 w-4/5 flex justify-center rounded hover:bg-slate-700 mx-4 mb-4 mt-4 relative">
                <svg className="self-center" width="20px" height="20px" viewBox="0 0 20 20">
                    <path fill="#fff" fillRule="evenodd" d="M11.5,3 C13.9852814,3 16,5.01375071 16,7.49783811 C16,7.58918732 15.9972755,7.6799005 15.9919032,7.76990088 L16,7.76976423 L15.999,8.997 C18.1421954,8.99711747 19.8910789,10.6802769 19.9951047,12.7956514 L20,12.9951958 C20,15.136362 18.3160315,16.8844053 16.1996403,16.9883812 L16,16.9932741 C15.9996653,16.9932741 15.9993306,16.9932741 15.9989959,16.993274 L16,17 L10.999,17 L10.9996688,13.0768434 L13.463273,13.0764006 L10,9.00384337 L6.5456688,13.0791659 L8.9996688,13.0778434 L8.999,17 L4,17 C1.79031836,16.9927317 -1.8189894e-12,15.2029389 -1.8189894e-12,12.9951958 C-1.8189894e-12,11.0615262 1.37340211,9.44847778 3.19839432,9.07741965 C3.0701163,8.74470702 3,8.38269974 3,8.00432379 C3,6.34826553 4.34314575,5.00576505 6,5.00576505 C6.55131242,5.00576505 7.06789096,5.154407 7.51180935,5.41378283 C8.26266931,3.97924323 9.76692243,3 11.5,3 Z" />
                </svg>
                <p className="ml-3 text-white font-bold">Ajouter une image</p>
                <input
                    type="file"
                    name="fileInput"
                    className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                    onChange={upload}
                    accept="image/*"
                />
            </div>
            {title ? <p className='italic absolute bg-[#6e6969c0] px-3 rounded-b-lg text-center '>{title}</p>:null}
        </div>
    );
}
