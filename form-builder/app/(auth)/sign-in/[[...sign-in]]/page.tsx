'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsArrow90DegRight, BsArrowBarRight } from 'react-icons/bs'

export default function SignInPage() {
  return (
    <div className="">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 flex flex-col justify-center items-center -z-10">
        <div className="w-96 h-96 bg-blue-800 opacity-30 blur-3xl rounded-full  "></div>
        {/* <div className="w-96 h-96 bg-violet-800 opacity-30 blur-3xl rounded-full "></div> */}

        {/* <div className="w-80 h-80 bg-purple-800 opacity-30 blur-2xl rounded-full "></div> */}
      </div>

      <div className="relative z-20 w-full max-w-md">
      <SignIn.Root >
        <SignIn.Step
          name="start"
          className="bg-gray-900 bg-opacity-80 w-full rounded-2xl py-10 px-8 shadow-xl border border-gray-700 space-y-6"
        >
          <div className="text-center text-white text-2xl font-bold mb-6">
            Welcome Back
          </div>

          <div className="flex justify-center items-center w-full">
            <Clerk.Connection
              name="google"
              className="flex items-center gap-x-3 justify-center w-full text-black font-medium border border-gray-700 shadow-md py-2 px-4 rounded-md bg-white hover:bg-gray-200 transition duration-200"
            >
              <Clerk.Icon className="size-4" />
              Sign in with Google
            </Clerk.Connection>
          </div>

          <div className="flex items-center justify-center text-gray-300 text-sm mt-4">
            <div className="border-b border-gray-700 w-full"></div>
            <span className="px-4">or</span>
            <div className="border-b border-gray-700 w-full"></div>
          </div>

          <Clerk.Field name="identifier" className="space-y-2">
            <Clerk.Label className="text-sm font-medium text-gray-300">
              Enter your Email
            </Clerk.Label>
            <Clerk.Input
              className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <Clerk.FieldError className="block text-red-500 text-sm" />
          </Clerk.Field>

          <div className="flex items-center justify-center mt-6">
            <SignIn.Action
              submit
              className="text-center flex items-center text-white font-semibold py-2 px-6 bg-gradient-to-r from-blue-500 to-yellow-600 rounded-md hover:scale-105 hover:transition"
            >
              Continue
              <AiOutlineArrowRight className="w-6 h-6 ml-2" />
            </SignIn.Action>
          </div>
        </SignIn.Step>
      </SignIn.Root>
      </div>

      
    </div>
  )
}
