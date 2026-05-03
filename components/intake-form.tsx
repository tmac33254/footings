'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Warning } from '@phosphor-icons/react'

interface FormData {
  name: string
  email: string
  phone: string
  industry: string
  asking_price: string
  financials_available: string
  timeline: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  industry: '',
  asking_price: '',
  financials_available: 'Partial',
  timeline: '',
}

const industries = [
  'HVAC',
  'Plumbing',
  'Roofing',
  'Electrical',
  'Landscaping / Lawn Care',
  'Pest Control',
  'Painting',
  'General Contracting',
  'Restoration / Remediation',
  'Other Trades',
]

const timelines = [
  'Under LOI — need this ASAP',
  'Reviewing NDA / in diligence',
  'Just sent an LOI',
  'Still evaluating the deal',
  'Closing within 30 days',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputBase =
  'w-full bg-white border text-sm text-zinc-900 px-4 py-3 placeholder-zinc-400 focus:outline-none disabled:opacity-50'

const inputTransition = { transition: 'border-color 150ms ease' }

function RequiredMark() {
  return <span className="text-amber-500 ml-0.5">*</span>
}

export default function IntakeForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  function validate(): boolean {
    const next: Partial<FormData> = {}
    if (!form.name.trim()) next.name = 'This field is required'
    if (!form.email.trim()) next.email = 'This field is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.industry) next.industry = 'This field is required'
    if (!form.asking_price.trim()) next.asking_price = 'This field is required'
    if (!form.timeline) next.timeline = 'This field is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed. Try again.')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (status === 'success') {
    return (
      <section id="intake" className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <CheckCircle size={40} weight="fill" className="text-amber-500 mx-auto" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Got it. You&apos;ll hear from us within 24 hours.
            </h2>
            <p className="text-zinc-600">
              We&apos;ll review your deal details and come back with a fixed-fee quote and a list
              of exactly what we need to get started.
            </p>
            <p className="text-sm text-zinc-400">
              Check your spam folder if you don&apos;t see anything by tomorrow.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="intake" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: CTA copy */}
          <div>
            <span className="font-mono text-[11px] text-amber-600 tracking-[0.2em] uppercase">
              / Get a Quote
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              Got a deal under LOI? Send the basics and get a quote in 24 hours.
            </h2>
            <p className="mt-5 text-zinc-600 leading-relaxed">
              No commitment required. We&apos;ll review what you send and come back with a
              fixed-fee quote. If the deal doesn&apos;t make sense for our scope, we&apos;ll tell
              you that too.
            </p>

            <div className="mt-8 space-y-3 text-sm text-zinc-500">
              <div className="flex items-center gap-3">
                <span className="font-mono text-amber-600">01</span>
                <span>Submit your deal details below</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-amber-600">02</span>
                <span>Quote arrives within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-amber-600">03</span>
                <span>Sign + send financials to start</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-zinc-700 tracking-wide uppercase">
                  Full Name<RequiredMark />
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  placeholder="Marcus Rivera"
                  style={inputTransition}
                  className={`${inputBase} ${
                    errors.name ? 'border-red-400' : 'border-zinc-300 focus:border-amber-500'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-zinc-700 tracking-wide uppercase">
                  Email<RequiredMark />
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  placeholder="marcus@acquirehvac.com"
                  style={inputTransition}
                  className={`${inputBase} ${
                    errors.email ? 'border-red-400' : 'border-zinc-300 focus:border-amber-500'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-700 tracking-wide uppercase">
                Phone{' '}
                <span className="text-zinc-400 normal-case font-normal">(optional — text-friendly)</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                disabled={status === 'loading'}
                placeholder="+1 (312) 847-1928"
                style={inputTransition}
                className={`${inputBase} border-zinc-300 focus:border-amber-500`}
              />
            </div>

            {/* Industry */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-700 tracking-wide uppercase">
                Target Business Industry<RequiredMark />
              </label>
              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                disabled={status === 'loading'}
                style={inputTransition}
                className={`${inputBase} appearance-none cursor-pointer ${
                  errors.industry ? 'border-red-400' : 'border-zinc-300 focus:border-amber-500'
                } ${!form.industry ? 'text-zinc-400' : ''}`}
              >
                <option value="" disabled>
                  Select an industry
                </option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              {errors.industry && <p className="text-xs text-red-500">{errors.industry}</p>}
            </div>

            {/* Asking price + Financials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-zinc-700 tracking-wide uppercase">
                  Asking Price<RequiredMark />
                </label>
                <input
                  name="asking_price"
                  value={form.asking_price}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  placeholder="e.g. $1,800,000"
                  style={inputTransition}
                  className={`${inputBase} ${
                    errors.asking_price
                      ? 'border-red-400'
                      : 'border-zinc-300 focus:border-amber-500'
                  }`}
                />
                {errors.asking_price && (
                  <p className="text-xs text-red-500">{errors.asking_price}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-zinc-700 tracking-wide uppercase">
                  Financials Available?
                </label>
                <div className="flex gap-3 pt-1">
                  {['Yes', 'No', 'Partial'].map((opt) => (
                    <label
                      key={opt}
                      style={{ transition: 'border-color 150ms ease, color 150ms ease' }}
                      className={`flex items-center gap-2 cursor-pointer text-sm px-3 py-2.5 border ${
                        form.financials_available === opt
                          ? 'border-amber-500 text-amber-700 bg-amber-50'
                          : 'border-zinc-300 text-zinc-600 hover:border-zinc-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="financials_available"
                        value={opt}
                        checked={form.financials_available === opt}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-700 tracking-wide uppercase">
                Where Are You in the Process?<RequiredMark />
              </label>
              <select
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                disabled={status === 'loading'}
                style={inputTransition}
                className={`${inputBase} appearance-none cursor-pointer ${
                  errors.timeline ? 'border-red-400' : 'border-zinc-300 focus:border-amber-500'
                } ${!form.timeline ? 'text-zinc-400' : ''}`}
              >
                <option value="" disabled>
                  Select your stage
                </option>
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.timeline && <p className="text-xs text-red-500">{errors.timeline}</p>}
            </div>

            {/* Error state */}
            {status === 'error' && (
              <div className="flex items-start gap-3 p-4 border border-red-300 bg-red-50">
                <Warning size={16} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                transition:
                  'background-color 150ms ease, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 font-semibold text-sm px-8 py-3.5"
            >
              {status === 'loading' ? (
                <>
                  <span className="inline-block w-3.5 h-3.5 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Get My Quote
                  <ArrowRight weight="bold" size={15} />
                </>
              )}
            </button>

            <p className="text-xs text-zinc-400">
              We don&apos;t share your information. Quote arrives within 24 hours on business days.
              <span className="ml-2 text-zinc-400">
                <RequiredMark /> Required fields
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
