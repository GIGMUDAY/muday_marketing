import { motion } from 'framer-motion'
import { useState } from 'react'

const Branding = () => {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const steps = [
    {
      title: 'Client information',
      questions: [
        {
          id: 'companyName',
          label: 'Business Name',
          description: 'What is the full legal name of your company?',
          type: 'text',
          required: true,
        },
        {
          id: 'nameMeaning',
          label: 'Business Name Meaning/Story',
          description:
            'What is the meaning behind your business name? Why did you choose this name, or what is the story or inspiration behind it?',
          type: 'textarea',
          required: true,
        },
        {
          id: 'tagline',
          label: 'Tagline (if any)',
          description: 'Do you have a tagline or slogan you want to incorporate into your brand?',
          type: 'text',
        },
        {
          id: 'industry',
          label: 'Industry',
          description:
            'What specific segment of industry does your business cater to (e.g., Manufacturing, Importing, Exporting, Wholesale/Retail, Service)?',
          type: 'text',
          required: true,
        },
        {
          id: 'briefDescription',
          label: 'Brief Description',
          description: 'Provide a brief description of your business, its history, vision, mission, and values.',
          type: 'group',
          required: true,
          subFields: [
            { id: 'history', label: 'History', required: true },
            { id: 'mission', label: 'Mission', required: true },
            { id: 'vision', label: 'Vision', required: true },
            { id: 'values', label: 'Values', required: true },
          ],
        },
      ],
    },
    {
      title: 'Target Audience',
      questions: [
        {
          id: 'targetAudience',
          label: 'Target Audience',
          description: 'Who is your target audience? Please describe their demographics, interests, and preferences.',
          type: 'textarea',
          required: true,
        },
        {
          id: 'competitors',
          label: 'Competitors',
          description: 'Are there any competitors in your industry whose logos you admire or wish to differentiate from?',
          type: 'textarea',
          required: true,
        },
        {
          id: 'brandPerception',
          label: 'Brand Perception',
          description: 'What is the ideal perception your audience should have of your brand?',
          type: 'textarea',
          required: true,
        },
        {
          id: 'valueProposition',
          label: 'Value Proposition',
          description: 'What problems does your company solve for your target audience?',
          type: 'textarea',
          required: true,
        },
        {
          id: 'tone',
          label: 'Tone & personality',
          description: 'How should your brand feel? (tone, personality, keywords)',
          type: 'textarea',
        },
      ],
    },
    {
      title: 'Design Preferences',
      questions: [
        {
          id: 'logoStyle',
          label: 'Logo Style',
          description: 'What style do you envision for your logo? (e.g., minimalist, vintage, modern, classic)',
          type: 'textarea',
          required: true,
        },
        {
          id: 'brandMark',
          label: 'Brand Mark',
          description: 'What kind of brand mark do you choose; Logomark, Logotype, or a Combination Mark?',
          type: 'textarea',
          required: true,
        },
        {
          id: 'colorPreferences',
          label: 'Color Preferences',
          description: 'Do you have specific colors in mind for your brand? Are there any colors you want to avoid?',
          type: 'textarea',
        },
        {
          id: 'symbolIcon',
          label: 'Symbol/Icon',
          description: 'Do you have any specific visual elements, symbols, icons, or imagery you would like in the logo or associated with your brand?',
          type: 'textarea',
        },
        {
          id: 'typography',
          label: 'Typography',
          description: 'Do you have any preferred font styles or examples you like? (Modern, classic, bold, minimalistic, serif vs. sans-serif)',
          type: 'textarea',
        },
        {
          id: 'logoExamples',
          label: 'Logo Examples',
          description: 'Are there any logos from other brands that you admire or would like to use as inspiration?',
          type: 'textarea',
        },
      ],
    },
    {
      title: 'Brand Identity & Practical Considerations',
      questions: [
        {
          id: 'brandPersonality',
          label: 'Brand Personality',
          description: 'Describe the personality or character you want your brand to convey in three words (e.g., bold, friendly, sophisticated).',
          type: 'textarea',
          required: true,
        },
        {
          id: 'uniqueSellingPoints',
          label: 'Unique Selling Points',
          description: 'What sets your business apart from competitors? Any unique selling points to emphasize in the brand?',
          type: 'textarea',
          required: true,
        },
        {
          id: 'longevity',
          label: 'Longevity',
          description: 'Do you want the brand to have a timeless or trendy feel?',
          type: 'textarea',
          required: true,
        },
        {
          id: 'practicalTitle',
          label: 'Practical Considerations',
          type: 'title',
        },
        {
          id: 'usage',
          label: 'Where Will It Be Used?',
          description:
            'What types of marketing materials will you need brand guidelines for? (e.g., business cards, brochures, signage, labels, website, social media templates, pitch decks)',
          type: 'textarea',
          required: true,
        },
        {
          id: 'sizeScalability',
          label: 'Size and Scalability',
          description: 'Are there specific size requirements or considerations for the logo’s use on various platforms?',
          type: 'textarea',
        },
        {
          id: 'printingConsiderations',
          label: 'Printing Considerations',
          description: 'Any specific printing requirements or considerations, such as using it on fabric or packaging?',
          type: 'textarea',
        },
      ],
    },
    {
      title: 'Budget & Additional Information',
      questions: [
        {
          id: 'budgetTitle',
          label: 'Budget and Timeline',
          type: 'title',
        },
        {
          id: 'budget',
          label: 'Budget',
          description: 'Do you have a budget range in mind for the brand design project?',
          type: 'textarea',
          required: true,
        },
        {
          id: 'timeline',
          label: 'Timeline',
          description: 'Is there a specific deadline for the completion of the brand guideline design development?',
          type: 'textarea',
          required: true,
        },
        {
          id: 'additionalTitle',
          label: 'Additional Information',
          type: 'title',
        },
        {
          id: 'anythingElse',
          label: 'Anything Else',
          description: 'Any additional information, ideas, or preferences relevant to the brand design process?',
          type: 'textarea',
        },
      ],
    },
  ]

  const currentStep = steps[step]

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const validateStep = () => {
    const missing = currentStep.questions.filter((q) => {
      if (!q.required) return false
      if (q.type === 'group' && q.subFields) {
        return q.subFields.some((sub) => !formData[`${q.id}_${sub.id}`]?.trim())
      }
      return !formData[q.id]?.trim()
    })
    if (missing.length > 0) {
      setError('Please complete the required fields before continuing.')
      return false
    }
    setError(null)
    return true
  }

  const handleNext = () => {
    if (!validateStep()) return
    setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  const handleBack = () => {
    setError(null)
    setStep((s) => Math.max(s - 1, 0))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep()) return
    alert('Thanks! We received your answers.')
    setOpen(false)
    setStep(0)
    setFormData({})
  }

  return (
    <section id="branding" className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p
              className="text-xs font-semibold uppercase tracking-wide text-black dark:text-white"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '12px' }}
            >
              Branding
            </p>
            <h3
              className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight"
              style={{ fontFamily: '"Urbanist", serif' }}
            >
              Build the brand foundation your growth deserves
            </h3>
            <p
              className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              style={{ fontFamily: '"Urbanist", serif' }}
            >
              From positioning to visual identity and messaging systems, we shape brands that are consistent across every touchpoint. Strategy, story, and design come together here before we launch any campaign.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex md:justify-end"
          >
            <button
              type="button"
              onClick={() => {
                setOpen(true)
                setStep(0)
                setError(null)
              }}
              className="inline-flex items-center justify-center px-6 py-4 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '15px' }}
            >
              Take the Branding Questionnaire
            </button>
          </motion.div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-y-auto max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Step {step + 1} of {steps.length}
                </p>
                <h4 className="text-lg font-semibold text-black dark:text-white">
                  {currentStep.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition"
                aria-label="Close"
              >
                x
              </button>
            </div>
            <form className="p-6 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-4">
                {currentStep.questions.map((q) => (
                  <label key={q.id} className="flex flex-col text-sm text-gray-700 dark:text-gray-300 gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span>{q.label}</span>
                        {q.required && <span className="text-red-500">*</span>}
                      </div>
                      {q.description && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">{q.description}</p>
                      )}
                    </div>
                    {q.type === 'title' && (
                      <h5 className="text-base font-semibold text-black dark:text-white mt-2 mb-1">
                        {q.label}
                      </h5>
                    )}
                    {q.type === 'textarea' && (
                      <textarea
                        value={formData[q.id] || ''}
                        onChange={(e) => handleChange(q.id, e.target.value)}
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white min-h-[90px]"
                      />
                    )}
                    {q.type === 'text' && (
                      <input
                        value={formData[q.id] || ''}
                        onChange={(e) => handleChange(q.id, e.target.value)}
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />
                    )}
                    {q.type === 'group' && q.subFields && (
                      <div className="space-y-4 bg-gray-50 dark:bg-gray-800/40 p-4 rounded-xl">
                        {q.subFields.map((sub) => {
                          const key = `${q.id}_${sub.id}`
                          return (
                            <div key={sub.id} className="flex flex-col gap-1">
                              <span className="text-xs text-gray-600 dark:text-gray-400">{sub.label}{sub.required ? ' *' : ''}</span>
                              <input
                                value={formData[key] || ''}
                                onChange={(e) => handleChange(key, e.target.value)}
                                className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent px-1 py-2 text-sm text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
                                placeholder=""
                              />
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </label>
                ))}
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                  disabled={step === 0}
                >
                  Back
                </button>
                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Branding
