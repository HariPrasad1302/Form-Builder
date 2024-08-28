import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server";

export  default async function Home() {
  const user = await currentUser()

  return (
    <>
    <div className='flex flex-col min-h-screen min-w-full
    bg-background max-h-screen'>
        <nav className='flex justify-between items-center
        h-[60px] px-4 py-2'>
            <Logo />
            

            <div className='flex gap-4 items-center'>
              {user && (
                  <Link href={'/dashboard'} className="text-md font-bold  border-2 border-gray-400 px-2 py-1 rounded-md" >Dashboard</Link>
              )}

                <SignedIn>
                  {/* Mount the UserButton component */}
                  <UserButton />
                </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className="bg-gradient-to-r from-blue-500 to-yellow-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-600">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
            </div>
        </nav>
        <main className='flex w-full flex-grow'>
            <section className="h-full w-full md:pt-28  relative flex items-center justify-center flex-col ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"/>
            <p className="text-center ">Craft Your Perfect Form, Your Way! </p>
            <div className="bg-gradient-to-r from-blue-500 to-secondary-foreground
            text-transparent bg-clip-text relative">
            <h1 className="text-9xl font-bold text-center md:text-[300px]">
            Builder
            </h1>
            </div>
            <div className="flex justify-center items-center relative md:mt-[-70px]
            ">
            <Image 
                src={'/builder2.png'} 
                alt="banner image" 
                height={1200}
                width={1200}
                className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <div className="bottom-0 top-[50%] bg-gradient-to-t 
            dark:from-background left-0 right-0 absolute z-10"></div>
            </div>
            </section>
        </main>
    </div>
      

      {/* <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 lg:!mt-60">
        <h2 className="text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet
          your needs. If
          {" you're"} not <br/>
          ready to commit you can get started for free
        </p>
        <div className="flex  justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between', {"border-2 border-primary": card.title === 'Unlimited Saas',
            })}>
              <CardHeader>
                <CardTitle className={clsx('', {"text-muted-foreground": card.title !== 'Unlimited Saas', })}>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">
                  {card.price}
                </span>
                <span className="">
                  /m
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>{card.features.map((feature) => (
                  <div key={feature} className="flex gap-2 items-center">
                    <Check className="text-muted-foreground"/>
                    <p>{feature}</p>
                  </div>
                ))}</div>
                <Link href={`/agency?plan=${card.priceId}`} className={clsx('w-full text-center bg-primary p-2 rounded-md', {"!bg-muted-foreground": card.title === 'Unlimited Saas'})}>
                Get Started
                </Link>
              </CardFooter>
            </Card>
          ) )}
        </div>
      </section> */}
      
    </>
  );
}
