import Head from "next/head"
import Image from "next/image"

export function Hero () {
    return(
        <>
        <Head>
            <title>Emmanuel Akanmu | Portfolio</title>
        </Head>
        <section className="flex gap-x-4 md:flex-row flex-col items-center justify-center p-8 min-h-screen align-middle">
            <div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:w-2.5/3">
                    Hello, I'm <span className="text-teal-500">Emmanuel Akanmu</span>.
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl">
                    A passionate software developer creating beautiful, responsive, and high-performance web applications. <br/>An aspiring designer and web developer
                </p>
            </div>
            <div className="w-60 h-70 rounded-xs overflow-hidden border-2 border-teal-500 mb-6">
                <Image src="/logo.jpeg" alt="Profile photo" width={400} height={400} className="w-full h-full object-cover"/>
            </div>
        </section>
        </>
    )
}