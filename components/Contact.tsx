import { FaRegCommentDots, FaTwitter, FaWhatsapp, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Contacts } from "@/utils/static";

export function Contact (){
    return(
        <div id="Contact" className="container mx-auto p-12">
            <h1 className=" mx-auto px-4 text-4xl font-bold text-center text-teal-500 mb-12"> Reach out </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {
                    Contacts.map((Contact, index)=>{
                        const Icon = {FaRegCommentDots, FaTwitter, FaWhatsapp, FaLinkedin, FaPhoneAlt,MdEmail}[Contact.icon];
                        return(
                            <div key={index} className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                {Icon && <Icon className="text-3xl text-teal-500"/>}
                                <div className="py-1 px-0.3">
                                    <h2 className="text-3.4xl  text-teal-500 mb-0.5 font-semibold">{Contact.name}</h2>
                                    <h3 className="text-sm  text-gray-400 ">{Contact.contact}</h3>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}