import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
        <div>
            <div>
                <h1>Your AI Career Coach for <br /> Professional Success</h1>
                <p>Advance your career with personalised guidance, interview preparartion, and AI-powered tools for job success.</p>
            </div>

            <div>
                <Link href='/dashboard'>
                    <Button size="lg" className="px-8">Get Started</Button>
                </Link>
                <Link href='https://www.youtube.com/kanishkadz'>
                    <Button size="lg" className="px-8" variant="outline">Get Started</Button>
                </Link>
            </div>
            <div>
                <div>
                    <Image src={"/banner.jpeg"} width={1280} height={720} alt="Dashboard Preview" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero