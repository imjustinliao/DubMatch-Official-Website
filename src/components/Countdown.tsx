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
      ? 'rounded-[26px] border border-white/10 bg-white/10 px-6 py-4 text-center text-white shadow-soft backdrop-blur-xl'
      : 'rounded-[28px] border border-[rgba(255,240,246,0.2)] bg-gradient-to-b from-[#2a0b16] via-[#1b0a12] to-[#0c0508] px-8 py-6 text-center text-[#fff0f6] shadow-soft'

  const valueClasses =
    variant === 'hero'
      ? 'text-3xl font-semibold tracking-tight text-white md:text-4xl'
      : 'text-4xl font-semibold tracking-tight text-[#fff0f6] md:text-5xl'

  const labelClasses =
    variant === 'hero'
      ? 'mt-2 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-slate-200'
      : 'mt-3 text-xs font-medium uppercase tracking-[0.4em] text-[#fcd6e3]'

  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
      {labels.map(({ value, label }) => (
        <div key={label} className={`${baseItemClasses} min-w-[82px] md:min-w-[112px]`}>
          <div className={valueClasses}>{timeLeft.completed ? '00' : value}</div>
          <div className={labelClasses}>{label}</div>
        </div>
      ))}
    </div>
  )
}
