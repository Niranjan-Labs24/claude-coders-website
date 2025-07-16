'use client'

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const EmailForm = () => {
  const [isSubmitting, setisSubmitting] = useState(false)
  const { push } = useRouter()

  const handleSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    // TODO: handle email submission (API call, etc.)
    try {
      setisSubmitting(true)
      const { status } = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (status === 201) push('/automation-testdrive')

    } catch (error) {
      console.log(error);
    } finally {
      setisSubmitting(false)
      form.reset();
    }
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 pt-4"
      onSubmit={handleSubmitEmail}
    >
      <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-2 gap-2 w-full">
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Enter Email Address"
          className="px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black text-base sm:col-span-3 col-span-1 w-full"
        />
        <button
          type="submit"
          className={cn("flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white text-base transition-colors hover:bg-gray-900 sm:col-span-1 col-span-1 w-full", {
            'disabled:bg-gray-500 cursor-not-allowed': isSubmitting
          })}
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <svg className="animate-spin mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          )}
          Claim <span className='font-semibold px-1'>Free</span> Block
        </button>
        <p className="text-red-500 text-[10px] sm:col-span-4 col-span-1 row-start-2 justify-self-end"><span className="font-sformold">First 10 Hour</span> Block is Free (No Fluff)</p>
      </div>
    </form>
  )
}

export default EmailForm
