import Link from "next/link";
import { media } from "@/lib/utils";
import { IconContext } from "react-icons";

const SocialMediaLinks = () => {
    return (
        <div className="flex flex-wrap max-[310px]:flex-wrap gap-4 sm:gap-5 mb-2">
            <IconContext.Provider value={{size:'50'}}>
            {media.map((item) => (
                item.show && (
                    <Link target="_blank" className="hover:scale-110 hover:opacity-75 transition-all duration-700" key={item.name} href={item.url}>
                        {item?.icon}
                    </Link>
                )
            ))}
            </IconContext.Provider>
        </div>
    );
};

export default SocialMediaLinks;