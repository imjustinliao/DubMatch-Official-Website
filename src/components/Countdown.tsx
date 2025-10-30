import { useEffect, useMemo, useState } from 'react'

type CountdownProps = {
  targetDate: string
  variant?: 'hero' | 'section'
  className?: string
}

type TimeLeft = {
  days: string
  hours: string
  minutes: string
  seconds: string
  completed: boolean
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const target = new Date(targetDate).getTime()
  const now = Date.now()
  const difference = target - now

  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      completed: true,
    }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / (1000 * 60)) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    completed: false,
  }
}

export function Countdown({ targetDate, variant = 'section', className = '' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [targetDate])

  const labels = useMemo(
    () => [
      { value: timeLeft.days, label: 'Days' },
      { value: timeLeft.hours, label: 'Hours' },
      { value: timeLeft.minutes, label: 'Minutes' },
      { value: timeLeft.seconds, label: 'Seconds' },
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds],
  )

  const baseItemClasses =
    variant === 'hero'
      ? 'rounded-2xl border border-white/60 bg-white/70 px-3 py-2 text-center shadow-soft backdrop-blur'
      : 'rounded-3xl border border-white/40 bg-white/70 px-6 py-5 text-center shadow-soft backdrop-blur'

  const valueClasses =
    variant === 'hero'
      ? 'text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl'
      : 'text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl'

  const labelClasses =
    variant === 'hero'
      ? 'mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500'
      : 'mt-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500'

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {labels.map(({ value, label }) => (
        <div key={label} className={`${baseItemClasses} min-w-[72px] md:min-w-[96px]`}>
          <div className={valueClasses}>{timeLeft.completed ? '00' : value}</div>
          <div className={labelClasses}>{label}</div>
        </div>
      ))}
    </div>
  )
}

