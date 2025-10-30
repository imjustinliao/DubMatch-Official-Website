import { useState } from 'react'

const steps = [
  {
    number: 1,
    title: 'Create your profile',
    description: 'Verify with your .edu email so we know you share campus spaces.',
  },
  {
    number: 2,
    title: 'See who\'s nearby',
    description: 'AI suggests the right moment, place, and icebreakers to meet safely.',
  },
  {
    number: 3,
    title: 'Meet IRL',
    description: 'Scan to confirm the meetup, then keep the conversation going in-app.',
  },
] as const

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20 md:py-28" data-animate>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            How DubMatch Works
          </h2>
          <p className="mt-4 text-lg text-slate-600 md:text-xl">
            Real connections, powered by AI.
          </p>
        </div>

        {/* Step Numbers */}
        <div className="mt-16 flex justify-center gap-4">
          {steps.map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`group flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold shadow-lg transition-all duration-300 md:h-20 md:w-20 md:text-3xl ${
                activeStep === index
                  ? 'scale-110 bg-gradient-to-br from-rose-500 to-purple-600 text-white shadow-xl shadow-purple-500/30'
                  : 'bg-white text-slate-400 hover:scale-105 hover:bg-slate-50 hover:text-slate-600'
              }`}
            >
              {step.number}
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="mt-12 overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`transition-all duration-500 ${
                activeStep === index
                  ? 'opacity-100 translate-y-0'
                  : 'absolute opacity-0 -translate-y-4 pointer-events-none'
              }`}
            >
              <article className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl md:p-12">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-purple-600 text-2xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{step.title}</h3>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                  {step.description}
                </p>
              </article>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStep === index ? 'w-8 bg-gradient-to-r from-rose-500 to-purple-600' : 'w-2 bg-slate-300'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
