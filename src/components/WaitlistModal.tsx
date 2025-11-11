import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type WaitlistModalProps = {
  open: boolean
  onClose: () => void
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzlgvgd'

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

const interestedOptions = ['man', 'woman', 'non-binary', 'everyone'] as const

export function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const [status, setStatus] = useState<SubmissionState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!open) {
      setStatus('idle')
      setErrorMessage('')
    }
  }, [open])

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    if (open) {
      document.addEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    const email = String(formData.get('email') ?? '').trim()
    if (!email.endsWith('.edu')) {
      setErrorMessage('Use your .edu email so we can verify your campus.')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Unable to submit form right now.')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email hello@dubmatch.app.')
    }
  }

  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(5,2,4,0.8)] px-4 backdrop-blur-sm transition">
      <div className="absolute inset-0" onClick={onClose} aria-hidden />
      <div className="relative z-10 w-full max-w-lg rounded-[32px] border border-[rgba(255,224,232,0.3)] bg-gradient-to-br from-[rgba(255,246,249,0.95)] via-white/90 to-[rgba(255,227,236,0.8)] p-8 shadow-2xl transition duration-300 ease-out">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d94873]">
              Join the waitlist
            </p>
            <h2 className="mt-2">
              <span className="block text-2xl font-semibold text-slate-900">Meet your crush on</span>
              <span className="block text-2xl font-semibold text-slate-900">Valentines 2026 💕</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close waitlist form"
            className="rounded-full border border-[rgba(255,213,224,0.7)] p-2 text-[#f2a8c1] transition hover:text-[#8e1c38]"
          >
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path
                fill="currentColor"
                d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586Z"
              />
            </svg>
          </button>
        </div>

        {status === 'success' ? (
          <div className="mt-8 rounded-2xl border border-[#ffe3ec] bg-white/85 p-6 text-center">
            <p className="text-lg font-semibold text-[#5c1022]">
              You&apos;re on the list. We&apos;ll message you before launch.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-[#be123c] px-6 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-[#8f0f2f]"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <Field label="Full Name" id="fullName">
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="First and last name"
                className="field-input"
              />
            </Field>
            <Field label="Gender">
              <select name="gender" required className="field-input">
                <option value="">Select gender</option>
                <option value="woman">Woman</option>
                <option value="man">Man</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </Field>
            <Field label="College Email (.edu required)" id="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@university.edu"
                className="field-input"
              />
            </Field>
            <Field label="I’m interested in">
              <select name="interestedIn" required className="field-input">
                <option value="">Select preference</option>
                {interestedOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.replace('-', ' ')}
                  </option>
                ))}
              </select>
            </Field>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 text-sm font-medium text-[#5c1022]">
              <input type="checkbox" name="notSingle" className="h-4 w-4" />
              <span>I&apos;m not single (optional)</span>
              </label>

              <a
              href="/#/not-single"
              aria-label="More info about not single"
              className="ml-3 inline-flex items-center justify-center text-[#5c1022] hover:text-[#8e1c38]"
              >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              </a>
            </div>
            {errorMessage ? (
              <p className="text-sm font-medium text-[#be123c]">
                {errorMessage}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-full bg-gradient-to-r from-[#be123c] to-[#8f0f2f] px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body,
  )
}

type FieldProps = {
  label: string
  id?: string
  children: ReactNode
}

function Field({ label, id, children }: FieldProps) {
  return (
    <label className="block text-left text-sm font-medium text-[#5c1022]" htmlFor={id}>
      <span>{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  )
}
