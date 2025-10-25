export const metadata = {
  title: "Sign In - Open PRO",
  description: "Page description",
};

import Link from "next/link"
import { login } from './actions'

export default function SignIn() {
  return (
    <section className="bg-stone-200 h-screen flex items-center justify-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* Section wrapper */}
        <div className="bg-white border border-stone-300 rounded-2xl shadow-lg p-8">
          <h1
            className="pb-5 font-nacelle text-4xl font-semibold text-[#273e3d]"
            data-aos="fade-up"
          >
            Welcome back!
          </h1>
          <div className="mx-auto max-w-3xl">
            <p
              className="mb-8 text-lg text-[#273e3d]"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Sign in to access your account and explore curated data roles across Europe.
            </p>
            {/* Contact form */}
            <form className="mx-auto max-w-[400px]">
              <div className="space-y-5">
                <div>
                  <label
                    className="mb-1 block text-sm font-bold text-left text-[#273e3d]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d]"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <label
                      className="block text-sm font-bold text-left text-[#273e3d]"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Link
                      className="text-sm font-bold text-[#273e3d] hover:underline"
                      href="/reset-password"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-input w-full bg-stone-100 text-[#273e3d] placeholder-[#273e3d]"
                    placeholder="Your password"
                    required
                  />
                </div>
              </div>
              <div className="mt-6 space-y-5">
                <button
                  formAction={login}
                  className="btn w-full bg-[#273e3d] text-white font-bold hover:bg-[#355c58] py-2 text-base rounded-full cursor-pointer"
                >
                  Sign in
                </button>
                <div className="flex items-center gap-3 text-center text-sm italic font-bold text-[#273e3d] before:h-px before:flex-1 before:bg-[#273e3d]/25 after:h-px after:flex-1 after:bg-[#273e3d]/25">
                  or
                </div>
                <button className="btn relative w-full bg-stone-100 text-[#273e3d] font-bold hover:bg-stone-200 py-2 text-base rounded-full cursor-pointer flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
                    <path fill="#EA4335" d="M24 9.5c3.15 0 5.9 1.15 8.1 3.05l6.05-6.05C34.15 3.5 29.4 1.5 24 1.5 14.85 1.5 7.2 7.4 4.2 15.35l7.45 5.8C13.2 14.2 18.2 9.5 24 9.5z"/>
                    <path fill="#34A853" d="M46.35 24.5c0-1.6-.15-3.15-.45-4.65H24v9.3h12.7c-.55 2.8-2.2 5.15-4.7 6.75l7.45 5.8c4.35-4.05 6.9-10.05 6.9-17.2z"/>
                    <path fill="#4A90E2" d="M10.65 28.15c-.55-1.6-.85-3.3-.85-5.15s.3-3.55.85-5.15l-7.45-5.8C2.4 15.4 1.5 19.6 1.5 24s.9 8.6 2.7 12.85l7.45-5.8z"/>
                    <path fill="#FBBC05" d="M24 46.5c5.4 0 10.15-1.8 13.55-4.9l-7.45-5.8c-2.05 1.4-4.7 2.25-6.1 2.25-5.8 0-10.8-4.7-12.35-10.95l-7.45 5.8C7.2 40.6 14.85 46.5 24 46.5z"/>
                  </svg>
                  Sign In with Google
                </button>
              </div>
            </form>
            {/* Bottom link */}
            <div className="mt-6 text-center text-sm font-bold text-[#273e3d]">
              Don't you have an account?{' '}
              <Link
                className="font-bold text-[#273e3d] hover:text-[#355c58]"
                href="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}