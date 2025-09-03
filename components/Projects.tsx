import Link from 'next/link';
import { FaGithub, FaLink } from 'react-icons/fa';
import {Projects} from '@/utils/static'
import Image from 'next/image';

export function Projectss (){
    return(
        <div id='Projects' className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center text-teal-500 mb-12"> Work Experiences </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {
                    Projects.map((Project) => (
                        <div key={Project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <Image src={Project.image} alt={Project.name} width={48} height={48} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{Project.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{Project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {Project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium bg-teal-500 bg-opacity-20 text-teal-400 rounded-full px-2 py-1"> {tag}</span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <Link href={Project.github} className="flex items-center gap-1 text-teal-500 hover:text-teal-400 transition-colors" target="_blank">
                                        <FaGithub/> Github
                                    </Link>
                                    <Link href={Project.link} className="flex items-center gap-1 text-teal-500 hover:text-teal-400 transition-colors" target="_blank">
                                        <FaLink /> Live Site
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}
