import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub,} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb} from "react-icons/si";
import { Skills } from "@/utils/static";


export function Skill (){
    return(
        <div id="Skills" className="container mx-auto p-8">
           <h1 className="text-4xl font-bold text-center text-teal-500 mb-12" >Skills & Proficiency </h1> 
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                Skills.map((Skill, index) => {
                    const Icon = {
                        FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb
                    }[Skill.icon];
                    return(
                    <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        {Icon && <Icon className="text-3xl text-teal-500 mb-2"/>}
                        <h2 className="text-3.4xl text-teal-500 mb-4 font-semibold">{Skill.name}</h2>
                        <p className="text-sm text-gray-400">{Skill.level}</p>
                    </div>
                    )
                })
            }
           </div>
        </div>
    )
}