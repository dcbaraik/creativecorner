import React from 'react'

const footer = () => {
    return (
        <div className='footdiv'>

            <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0">
                        <img src="/assets/logo.png" class="logo" alt="Logo" />
                    </a>
                    <ul class="flex flex-wrap justify-between items-center mb-6  text-gray-800 sm:mb-0 dark:text-gray-800">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr />
                <span class="block  text-gray-800 sm:text-center dark:text-gray-800">© 3 <a href="/" class="hover:underline">Creative Corner</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}

export default footer