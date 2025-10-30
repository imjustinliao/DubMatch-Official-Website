import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type WaitlistModalProps = {
  open: boolean
  onClose: () => void
}

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/your-form-id'

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
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm transition">
      <div className="absolute inset-0" onClick={onClose} aria-hidden />
      <div className="relative z-10 w-full max-w-lg rounded-[32px] border border-white/60 bg-white/95 p-8 shadow-2xl transition duration-300 ease-out">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              Join the waitlist
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              We&apos;ll reach out before launch ❤️
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close waitlist form"
            className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:text-slate-900"
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
          <div className="mt-8 rounded-2xl bg-lavender/10 p-6 text-center">
            <p className="text-lg font-semibold text-slate-900">
              You&apos;re on the list! We&apos;ll message you before launch 💜
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
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
            </div>
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
              <div className="grid gap-2 sm:grid-cols-2">
                {interestedOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 transition hover:border-lavender/40 hover:shadow-soft"
                  >
                    <span className="capitalize">{option}</span>
                    <input
                      type="radio"
                      name="interestedIn"
                      value={option}
                      required
                      className="accent-lavender"
                    />
                  </label>
                ))}
              </div>
            </Field>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="School Name" id="school">
                <input
                  id="school"
                  name="school"
                  type="text"
                  required
                  placeholder="University of..."
                  className="field-input"
                />
              </Field>
              <Field label="Social Link (optional)" id="social">
                <input
                  id="social"
                  name="social"
                  type="url"
                  placeholder="Instagram, LinkedIn, etc."
                  className="field-input"
                />
              </Field>
            </div>
            {errorMessage ? (
              <p className="text-sm font-medium text-rose">
                {errorMessage}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-full bg-dub-gradient px-6 py-3 text-sm font-semibold text-slate-900 shadow-card transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
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
    <label className="block text-left text-sm font-medium text-slate-700" htmlFor={id}>
      <span>{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  )
}
