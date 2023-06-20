import foto from "../assets/foto.svg"
import svg1 from "../assets/sapiens.png"
import pokemonpng from "../assets/pokemon.png";
import pointsvg from "../assets/sales.webp"
import gurumupng from "../assets/gurumu crop.png"

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
                alert('Terjadi kesalahan saat mengirim email:', error);
            });
    };

    return (
        <div className="relative [background:linear-gradient(118.58deg,_#fff_14.5%,_#ffdcff_40.09%,_#c198dd_53.45%,_#c199dd_55.5%,_#fff)] w-full h-full overflow-hidden text-left text-21xl text-color3">
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
            <div id="about" className="h-[45rem] w-full ">
                <p className="text-2xl justify-center flex font-bold">About Me</p>
                <div className="flex text-center justify-evenly">
                    <img src={svg1} alt="svg" className="w-1/2" />
                    <p className="w-1/3 text-xl py-px mt-24">Hello, I am pryscila dinda, web application development using React, TypeScript, and Tailwind CSS. I also have expertise in design using Figma and using Daisy UI to speed up development.
                        <br />
                        In addition, I am experienced in integration with REST APIs and using the Vercel platform for easy deployment of web applications. I am always enthusiastic in taking on new challenges and ready to contribute to the development of innovative web applications.

                    </p>
                </div>
            </div>
            <div id="projects" >
                <p className="text-2xl font-bold mx-auto pb-6 flex justify-center">Projects</p>
                <div className="flex justify-center">
                    <Slider {...settings} className="mx-auto w-[50%] pt-4">
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
            <div id="contact" className=" h-fit pt-24 w-full ">
                <p className="text-2xl font-bold flex justify-center">Contact</p>
                <form onSubmit={handleSubmit} action="https://formspree.io/f/xvoneqqe" className="flex flex-col items-center mt-8">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border bg-white rounded-lg py-2 px-4 mb-4 w-[40rem] h-16"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border bg-white rounded-lg py-2 px-4 mb-4 w-[40rem] h-16"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border bg-white rounded-lg py-2 px-4 mb-4 w-[40rem] h-32"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-color5 text-white rounded-lg py-2 px-4 w-[40rem]"
                    >
                        Send
                    </button>
                </form>
            </div>
            <div>tech</div>
        </div>
    )
}

export default Home