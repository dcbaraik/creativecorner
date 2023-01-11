import Link from 'next/link'
import React from 'react'

const footer = () => {
    return (
        <div className='footdiv'>

            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0">
                        <img src="/assets/logo.png" className="logo" alt="Logo" />
                    </a>
                    <ul className="flex flex-wrap justify-between items-center mb-6  text-gray-800 sm:mb-0 dark:text-gray-800">
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr />
                <span className="block  text-gray-800 sm:text-center dark:text-gray-800">© 3 <a href="/" className="hover:underline">Creative Corner</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}

export default footer