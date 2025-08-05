"use client"
import Hero from "@/components/molecules/Hero"
import Bars from "@/components/molecules/Bars"
import Quote from "@/components/molecules/Quote"
import Steps from "@/components/molecules/Steps"
import Counter from "@/components/molecules/Counter"
import Perks from "@/components/molecules/Perks"
import Security from "@/components/molecules/Security"

function page() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Bars />
      <Quote />
      <Steps />
      <Counter />
      <Security />
      <Perks />
    </main>
  )
}

export default page
