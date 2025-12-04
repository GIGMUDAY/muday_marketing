import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Github, Mail, Send } from 'lucide-react'

// Simple className utility function
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

interface SignupFormProps {
  onSubmit?: (data: FormData) => void
  title?: string
  description?: string
}

export function SignupForm({ onSubmit, title, description }: SignupFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    if (onSubmit) {
      onSubmit(formData)
    } else {
      console.log('Form submitted:', Object.fromEntries(formData))
      alert('Thank you for your message! We will get back to you soon.')
      e.currentTarget.reset()
    }
  }

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white dark:bg-gray-900 p-4 md:rounded-2xl md:p-8">
      {title && (
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="firstname" placeholder="John" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="lastname" placeholder="Doe" type="text" required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="your.email@example.com" type="email" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" type="tel" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Your Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project..."
            rows={4}
            required
            className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-input ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300 resize-none"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-accent dark:from-white dark:to-gray-200 font-medium text-white dark:text-black shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all duration-200 hover:shadow-lg"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

        <div className="flex flex-col space-y-4">
          <a
            href="mailto:sales@mudaymarketing.com"
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 dark:bg-gray-800 px-4 font-medium text-black dark:text-white transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Mail className="h-4 w-4 text-neutral-800 dark:text-neutral-200" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Email Us
            </span>
            <BottomGradient />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 dark:bg-gray-800 px-4 font-medium text-black dark:text-white transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Github className="h-4 w-4 text-neutral-800 dark:text-neutral-200" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </a>
        </div>
      </form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  )
}


