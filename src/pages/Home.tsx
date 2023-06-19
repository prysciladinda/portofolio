import foto from "../assets/foto.svg"
import svg1 from "../assets/sapiens.png"

import { AiFillGithub } from "react-icons/ai"
import { FiDownload } from "react-icons/fi"
import { BsInstagram, BsLinkedin } from "react-icons/bs"

function Home() {
    return (
        <div className="relative [background:linear-gradient(118.58deg,_#fff_14.5%,_#ffdcff_40.09%,_#c198dd_53.45%,_#c199dd_55.5%,_#fff)] w-full h-[3518px] overflow-hidden text-left text-21xl text-color3">
            <div className="h-screen w-full">
                <div className="flex flex-row justify-around h-[5rem] my-10 py-px text-color3">
                    <p className="text-xl font-bold">Pryscila Dinda</p>
                    <ul className="flex space-x-6 text-lg">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="flex flex-row justify-around h-auto w-full ">
                    <div className="text-color3 py-px m-4">
                        <p className="text-xl">Hello,</p>
                        <p className="font-roboto text-4xl font-bold pt-1">I`m Frontend
                            <br /> developer</p>
                        <p className="text-xl pt-3">who specializes in turning designs into
                            <br />
                            interactive and engaging web code.</p>
                        <br />
                        <div className="flex flex-row gap-4">
                            <button className="bg-color5 rounded-2xl text-white w-44 h-8 flex flex-row p-1 m-1 gap-4 hover:bg-color3">
                                <FiDownload className="w-5 h-5 ml-1" />
                                Download CV</button>
                            <a href="https://github.com/prysciladinda" target="_blank" rel="noopener noreferrer">
                                <AiFillGithub className="w-10 h-10 text-color3" />
                            </a>
                            <a href="https://www.instagram.com/prysciladinda/" target="_blank" rel="noopener noreferrer">
                                <BsInstagram className="w-9 h-9 m-1 text-color3" />
                            </a>
                            <a href="https://www.linkedin.com/in/nama_pengguna_linkedin/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className="w-9 h-9 m-1 text-color3" />
                            </a>

                        </div>
                    </div>
                    <img src={foto} alt="foto" className="w-[25%]" />
                </div>
            </div>
            <div id="about" className="h-fit w-full ">
                <p className="text-2xl justify-center flex font-bold">About Me</p>
                <div className="flex text-center justify-evenly">
                    <img src={svg1} alt="svg" className="w-1/2" />
                    <p className="w-1/3 text-xl py-px m-4">Hello, I am pryscila dinda, web application development using React, TypeScript, and Tailwind CSS. I also have expertise in design using Figma and using Daisy UI to speed up development.
                        <br />
                        In addition, I am experienced in integration with REST APIs and using the Vercel platform for easy deployment of web applications. I am always enthusiastic in taking on new challenges and ready to contribute to the development of innovative web applications.

                    </p>
                </div>
            </div>
            <div id="projects">Projects</div>
            <div id="contact">contact</div>
            <div>tech</div>
        </div>
    )
}

export default Home