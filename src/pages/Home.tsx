import foto from "../assets/foto.svg"
import svg1 from "../assets/sapiens.png"
import pokemonpng from "../assets/pokemon.png";
import pointsvg from "../assets/sales.webp"
import gurumupng from "../assets/gurumu crop.png"
import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/logo2.svg"
import cvPdf from "../assets/CV_Pryscila Dinda Eliana.pdf";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillGithub } from "react-icons/ai"
import { FiDownload } from "react-icons/fi"
import { BsInstagram, BsLinkedin } from "react-icons/bs"

import Card from "../components/Card"
import { useState } from "react";

const data = [
    {
        id: 1,
        image: pokemonpng,
        title: "Pokemon",
        description: "A website about catching pokemons integrated with the pokemon API",
        onclick: "https://github.com/prysciladinda/pokemon-app"
    },
    {
        id: 2,
        image: pointsvg,
        title: "Pointku",
        description: "PointKu is a cashier / point of sale web in which we can add products / items that we will sell by filling out the form provided.",
        onclick: "https://github.com/prysciladinda/PointKu"
    },
    {
        id: 3,
        image: gurumupng,
        title: "GuruMu",
        description: "GuruMu is an online tutoring platform that helps students out there who want to grow together and improve their knowledge with competent teachers who have guaranteed expertise.",
        onclick: "https://github.com/prysciladinda/GuruMu"
    },

];

function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,

    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (e: { preventDefault: () => void; target: any; }) => {
        e.preventDefault();
        // Kirim form ke URL Formspree
        const form = e.target;
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    alert('Email berhasil dikirim');
                    // Reset form setelah pengiriman berhasil
                    setName('');
                    setEmail('');
                    setMessage('');
                } else {
                    alert('Terjadi kesalahan saat mengirim email');
                }
            })
            .catch(error => {
                alert('Terjadi kesalahan saat mengirim email:' + error);
            });
    };

    return (
        <div className="relative [background:linear-gradient(118.58deg,_#fff_14.5%,_#ffdcff_40.09%,_#c198dd_53.45%,_#c199dd_55.5%,_#fff)] w-full h-full overflow-hidden text-left text-21xl text-color3">
            <div className="lg:h-[40rem] h-[45rem] w-full">

                <nav className="relative lg:h-[15%] ">
                    <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold">Pryscila Dinda</h1>

                            {/* Mobile menu button */}
                            <div className="flex lg:hidden  md:hidden">
                                <button onClick={toggleMenu} type="button" className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 " aria-label="toggle menu">
                                    {!isOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                            <div className="flex flex-col md:flex-row md:mx-6">
                                <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" href="#about">About</a>
                                <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" href="#projects">Projects</a>
                                <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>



                <div className="flex lg:flex-row flex-col-reverse justify-around h-auto w-full lg:pt-14 pt-8 ">
                    <div className="text-color3 py-px m-4">
                        <p className="text-xl">Hello,</p>
                        <p className="font-roboto text-4xl font-bold pt-1">I`m Frontend
                            <br /> developer</p>
                        <p className="text-xl pt-3">who specializes in turning designs into
                            <br />
                            interactive and engaging web code.</p>
                        <br />
                        <div className="flex lg:flex-row flex-wrap-reverse gap-4">
                            <button className="bg-color5 rounded-2xl text-white lg:w-44 w-[25rem] lg:h-8 h-10 flex flex-row pt-2 justify-center  lg:p-1 lg:m-1 gap-4 hover:bg-color3" onClick={() => {
                                const link = document.createElement('a');
                                link.href = cvPdf;
                                link.download = 'CV_Pryscila Dinda Eliana';
                                link.click();
                            }}>
                                <FiDownload className="w-5 h-5 ml-1" />
                                Download CV</button>
                            <a href="https://github.com/prysciladinda" target="_blank" rel="noopener noreferrer">
                                <AiFillGithub className="w-10 h-10 text-color3" />
                            </a>
                            <a href="https://www.instagram.com/prysciladinda/" target="_blank" rel="noopener noreferrer">
                                <BsInstagram className="w-9 h-9 m-1 text-color3" />
                            </a>
                            <a href="https://www.linkedin.com/in/pryscila-dinda-42056a147/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className="w-9 h-9 m-1 text-color3" />
                            </a>

                        </div>
                    </div>
                    <img src={foto} alt="foto" className="lg:w-[25%] w-[50%] self-center" />
                </div>
            </div>
            <div id="about" className="lg:h-[45rem] h-[50rem] w-full ">
                <p className="text-2xl justify-center flex font-bold">About Me</p>
                <div className="flex flex-col lg:flex-row lg:text-center lg:justify-evenly ">
                    <img src={svg1} alt="svg" className="lg:w-1/2 w-[60%] self-center lg:pt-0 pt-8" />
                    <p className="lg:w-1/3 text-xl py-px lg:mt-24 m-4 text-center">Hello, I am pryscila dinda, web application development using React, TypeScript, and Tailwind CSS. I also have expertise in design using Figma and using Daisy UI to speed up development.
                        <br />
                        In addition, I am experienced in integration with REST APIs and using the Vercel platform for easy deployment of web applications. I am always enthusiastic in taking on new challenges and ready to contribute to the development of innovative web applications.

                    </p>
                </div>
            </div>
            <div id="projects" className="h-fit" >
                <p className="text-2xl font-bold mx-auto pb-6 flex justify-center">Projects</p>
                <div className="flex justify-center">
                    <Slider {...settings} className="mx-auto lg:w-[50%] w-[75%] pt-4">
                        {data.map((item) => (
                            <Card
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                buttonText="Click here"
                                onClickdata={item.onclick}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
            <div id="contact" className=" lg:h-[35rem] pt-24 w-full ">
                <p className="text-2xl font-bold flex justify-center">Contact</p>
                <div className="flex flex-row justify-center ">
                    <form onSubmit={handleSubmit} action="https://formspree.io/f/xvoneqqe" className="flex flex-col items-center mt-8">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border bg-white rounded-lg py-2 px-4 mb-4 lg:w-[40rem] w-[15rem] h-16 self-center"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border bg-white rounded-lg py-2 px-4 mb-4 lg:w-[40rem] w-[15rem] h-16"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="border bg-white rounded-lg py-2 px-4 mb-4 lg:w-[40rem] w-[15rem] h-32"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-color5 text-white rounded-lg py-2 px-4 lg:w-[40rem] w-[15rem]"
                        >
                            Send
                        </button>
                    </form>
                    <div className="flex flex-col self-center gap-2 pl-6 ">
                        <a href="https://github.com/prysciladinda" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className="w-10 h-10 text-color3" />
                        </a>
                        <a href="https://www.instagram.com/prysciladinda/" target="_blank" rel="noopener noreferrer">
                            <BsInstagram className="w-9 h-9 m-1 text-color3" />
                        </a>
                        <a href="https://www.linkedin.com/in/pryscila-dinda-42056a147/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className="w-9 h-9 m-1 text-color3" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-[25rem] w-full flex flex-col justify-center items-center">
                <p className="text-2xl font-bold">Tech stack</p>
                <img src={logo1} alt="logo" className="lg:w-[15rem] w-1/2" />
                <br />
                <img src={logo2} alt="logo" className="lg:w-[30rem] w-[75%]" />
            </div>

        </div>
    )
}

export default Home