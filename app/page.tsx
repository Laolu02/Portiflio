import { Hero } from "@/components/HomeComp/HomePageServer"
import { Skill } from "@/components/Skills"
import ContactForm from "@/components/ContactMe"
import { Contact } from "@/components/Contact"
import { Testimonials } from "@/components/Testimonies"
import { About } from "@/components/About"
import { Projectss } from "@/components/Projects"

export default function Homepage (){
  return(
    <main>
      <Hero/>
      <About/>
      <Skill/>
      <Projectss/>
      <Contact/>
      <ContactForm/>
      <Testimonials/>
    </main>
  )
}