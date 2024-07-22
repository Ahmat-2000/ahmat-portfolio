'use client';
import { IoMdDownload } from "react-icons/io";

const DownloadButton = ({url, name}) => {
    const handleDownload = () => {
        // URL to the PDF file in the public directory
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center p-2 font-sans font-semibold text-neutral-300 outline-pink-600 outline min-w-max rounded-xl text-sm hover:bg-pink-500 hover:outline-gray-900"
        >
            DOWNLOAD RESUME <IoMdDownload className="ml-1" color="blue" size={20}/>
        </button>
    );
};

export default DownloadButton;
