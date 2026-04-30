import Nav from '@/components/nav'
import Hero from '@/components/hero'
import BuiltFor from '@/components/built-for'
import Problem from '@/components/problem'
import Qoe from '@/components/qoe'
import PostClose from '@/components/post-close'
import StatsStrip from '@/components/stats-strip'
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
      <BuiltFor />
      <Problem />
      <Qoe />
      <PostClose />
      <StatsStrip />
      <WhyUs />
      <Process />
      <Faq />
      <IntakeForm />
      <Footer />
    </main>
  )
}
