import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
// array for navbar
const navigation = [
    { name: "Destination", href: "/", current: false },
    { name: "Discover", href: "/discover", current: false },
    { name: "Packages", href: "/packages", current: false },
    { name: "Explore", href: "/explore", current: false },
    { name: "About us", href: "/about", current: false },
    { name: "Gallery", href: "/gallery", current: false },
    { name: "FAQ", href: "/faq", current: false },
]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}



export default function Navbar() {
    const router = useRouter();
    return (
       <Disclosure as="nav" className="bg-gray-900">
       {({open}) =>(
        <>
        <div className="min-w-7xl mx-auto border-b border-gray-50 bg-gray-900 px-2 sm:px-6 lg:px-8">
          <div className="relative mx-0 flex h-16 items-center justify-between md:mx-20">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-violet-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
            <div className="flex flex-shrink-0 items-center ">
                <h1 className="cursor-pointer text-xl font-semibold ">
                  <span className='text-gray-200'>Travel</span><span className="text-violet-500">Eth</span>
                </h1>
              </div>
              <div className="hidden sm:ml-6 sm:block md:ml-60">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    
                    <a
                      key={item.name}
                      href={item.href}

                      className={`${
                        router.asPath === item.href ?'bg-gray-300 text-black rounded pr-3 pl-3' : 'text-gray-300 hover:bg-violet-500 hover:text-white hover:shadow-lg'
                      }`}
                    //   aria-current={item.href === router.pathname ? true : false}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="rounded-md border border-violet-100 px-3 py-2 text-sm font-medium text-violet-400 hover:bg-violet-500 hover:text-white  hover:shadow-lg">
                Register
              </button>
            </div>
          </div>
        </div>


        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                    router.asPath === item.href
                    ? 'bg-violet-500 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-violet-500 hover:text-white hover:shadow-lg',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
       )}

       </Disclosure>
    )
}