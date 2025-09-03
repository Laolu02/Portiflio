


export default function About(){
    return(
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center text-teal-500 mb-12">About Me</h1>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-gray-700">
                  <img src="/image.png" alt=" Emmanuel Akanmu" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg leading-relaxed mb-4">
                  I am a passionate and results-driven Full-Stack Developer with a strong foundation in JavaScript, TypeScript, React, Node.js, and Tailwind CSS, with 9months+ hands-on experience building scalable web applications. I enjoy translating ideas into efficient, user-friendly solutions and continuously improving my technical skillset to stay ahead in the fast-evolving tech landscape.
                </p>
                <p className="text-lg leading-relaxed mb-5">Beyond frontend and backend development, I have practical knowledge of RESTful APIs, database management (MongoDB), authentication systems, and third-party integrations. My recent projects include implementing secure OTP and notification services with Infobip,Redis, designing order management systems, and building responsive UI components with modern frameworks.</p>
                <p className="text-lg leading-relaxed mb-2">I thrive in collaborative environments where teamwork and problem-solving are key, but I am equally comfortable taking ownership of independent tasks. I bring:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Technical versatility across frontend and backend technologies</li>
                    <li>Strong problem-solving skills with a focus on clean, maintainable code</li>
                    <li>Hands-on project experience in real-world applications</li>
                    <li>Communication and adaptability to align with both technical and business goals</li>
                  </ul>
                  <p className="text-lg leading-relaxed">
                  I am excited about opportunities where I can contribute to impactful projects, grow under experienced mentorship, and bring value to a forward-thinking engineering team.
                </p>
              </div>
            </div>
        </div>
    )
}