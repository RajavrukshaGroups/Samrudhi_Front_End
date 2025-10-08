"use client"

import { ServiceCard } from "../../components/services-atm-cards/servicsCards"

const  ServicesSection=()=> {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-foreground/80" />
              <span>Latest Service</span>
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
              Clean Energy, Bright Future!
            </h1>

            <p className="mt-4 max-w-prose text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            <button className="mt-8 inline-flex items-center rounded-full bg-accent-yellow px-6 py-3 text-sm font-medium text-brand hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-yellow/60">
              View All Service{" "}
              <span aria-hidden className="ml-2">
                →
              </span>
            </button>
          </div>

          {/* RIGHT COLUMN - STACKED ATM CARDS */}
          <div aria-label="Service cards" className="relative">
            <div className="relative">
              <ServiceCard
                title="Client-Centric Excellence"
                description="Our foremost commitment is to our clients. We strive to understand their unique needs and deliver unparalleled service, ensuring a seamless and rewarding real estate journey."
                className="z-30"
              />
              <ServiceCard
                title="Community Building"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar."
                className="-mt-6 z-20"
              />
              <ServiceCard
                title="Innovation and Adaptability"
                description="Embracing innovation is at the core of our mission. We constantly seek new technologies and forward-thinking solutions to enhance our services."
                className="-mt-6 z-10"
              />
              <ServiceCard
                title="Ethical Practices"
                description="Integrity is the foundation of Samrudhi. Our mission is to uphold the highest ethical standards in every aspect of our business."
                className="-mt-6 z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Reference image (hidden). Keeps asset in repo without affecting UI */}
      <figure className="hidden" aria-hidden="true">
        <img src="/images/reference.png" alt="" />
      </figure>
    </section>
  )
}

export default ServicesSection