import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Qoe from '@/components/qoe'
import PostClose from '@/components/post-close'
import WhyUs from '@/components/why-us'
import Process from '@/components/process'
import Faq from '@/components/faq'
import IntakeForm from '@/components/intake-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Qoe />
      <PostClose />
      <WhyUs />
      <Process />
      <Faq />
      <IntakeForm />
      <Footer />
    </main>
  )
}
