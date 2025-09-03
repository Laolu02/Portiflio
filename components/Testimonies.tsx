import { Testimonies } from "@/utils/static"
import { FaQuoteLeft } from "react-icons/fa6";

export function Testimonials(){
    return(
        <div id="Testimonies" className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center text-teal-500 mb-12"> Testimonials</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    Testimonies.map((Testimonie) => (
                     <div
                        key={Testimonie.id}
                        className="bg-gray-800 rounded-lg  gap-2 shadow-lg p-6 flex items-start text-center"
                        >
                        <FaQuoteLeft className="text-3xl text-teal-500 mb-4" />
                        <div className="py-1 px-0.3">
                            <p className="italic text-lg mb-4">“{Testimonie.quote}”</p>
                            <p className="font-semibold text-teal-400">{Testimonie.name}</p>
                            <p className="text-sm text-gray-400">{Testimonie.title}</p>
                        </div>
                        
                     </div>
                ))}
            </div>
        </div>
    )
}