import Image from "next/image";
import { FaTwitter } from 'react-icons/fa'
import { TfiFacebook } from 'react-icons/tfi'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from "next/link";

const Footer = () => {
    return (

        <div className='md:my-12 mb-10 pt-8 mt-16 md:mx-24 mx-10'>
            <div className="grid grid-cols-12">
                <div className="lg:col-span-3 mb-3 lg:mb-0 md:col-span-6 col-span-12">
                    <div className="icons">
                        <Image src="/Logo.jpg" height={35} width={150} alt='logo' />
                        <p className='py-4 text-[#666] text-base'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                        <div className="flex gap-4">
                            <Link href="#" className="bg-[#f1f1f1] text-xl py-2 px-3 rounded-md">
                                <FaTwitter />
                            </Link>
                            <Link target='_blank' href="#" className="bg-[#f1f1f1] text-xl py-2 px-3 rounded-md">
                                <TfiFacebook />
                            </Link>
                            <Link href="#" className="bg-[#f1f1f1] text-xl py-2 px-3 rounded-md">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="list-items lg:col-span-3 lg:m-auto mb-3 lg:mb-0 md:col-span-6 col-span-12 inline-block h-full">
                    <h3 className='text-[#666] mb-6 font-bold text-xl'>Company</h3>
                    <ul>
                        <li className="text-[#666] text-base mt-3"> <Link href="#">About</Link> </li>
                        <li className="text-[#666] text-base mt-3"> <Link href="#">Terms of Use</Link>  </li>
                        <li className="text-[#666] text-base mt-3"> <Link href="#">Privacy Policy</Link> </li>
                        <li className="text-[#666] text-base mt-3"> <Link href="#">How it Works</Link> </li>
                        <li className="text-[#666] text-base mt-3"> <Link href="#">Contact Us</Link> </li>
                    </ul>
                </div>
                <div className="lg:col-span-3 lg:m-auto mb-3 lg:mb-0 md:col-span-6 col-span-12 inline-block h-full">
                    <h3 className='text-[#666] mb-6 font-bold text-xl'>Support</h3>
                    <ul>
                        <li className="text-[#666] text-base mt-3">
                            <Link href="#">Support Carrer</Link> </li>
                        <li className="text-[#666] text-base mt-3">
                            <Link href="#">24h Service</Link></li>
                        <li className="text-[#666] text-base mt-3">
                            <Link href="#">Quick Chat</Link> </li>
                    </ul>
                </div>
                <div className="lg:col-span-3 lg:m-auto mb-3 lg:mb-0 md:col-span-6 col-span-12 inline-block h-full">
                    <h3 className='text-[#666] font-bold mb-6 text-xl'>Contact</h3>
                    <ul><li className="text-[#666] text-base mt-3"> <Link href="#">Whatsapp</Link> </li><li className="text-[#666] text-base mt-3"><Link href="#">Support 24h</Link> </li></ul>
                </div>
            </div>
            <div className="mt-16">
                <div className="grid grid-cols-12" style={{ borderTop: "1px solid #666" }}>
                    <div className="lg:col-span-4 md:col-span-6 mt-3 col-span-12 mb-3">
                        <p className='text-[#666] text-base'>Copyright © 2022 Dine Market</p>
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12 mt-3 mb-3 lg:m-auto">
                        <p className='text-[#666] text-base'>Design by: <span className='text-[#212121] font-bold'>Samawia Shahid</span></p>
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-3 mt-3 lg:ml-auto">
                        <p className='text-[#666] text-base'>Code by: <span className='text-[#212121] font-bold'><Link href="#">SamawiaShahid on github</Link> </span></p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Footer;