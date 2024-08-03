
import { featuresData } from "@/lib/featuresData";
import FeaturesCard from "./FeaturesCard";

function Features() {
    return (
        <section id="features" className="flex flex-col mx-auto scroll-mt-32 p-2 mt-20" >
            <h2 className="title-blue text-3xl font-bold mb-8">What Can I Do ?</h2>
            <div className="grid gap-8 py-4">
                {
                    featuresData.map((item,id) =>(
                        <FeaturesCard key={id} title={item.title} body={item.body}/>
                    ))
                }
            </div>
        </section>
     );
}

export default Features;