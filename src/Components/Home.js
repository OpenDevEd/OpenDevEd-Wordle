import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from 'tsparticles-slim';

const Home = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
         console.log(container);
    }, []);

    return (
        <div className="font-lato flex flex-col items-center justify-center min-h-screen  ">
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <h1 className="text-light-blue-200 text-7xl font-bold mb-4">Welcome to Wordle!</h1>
        <p className="text-white font-extrabold font-serif text-2xl mb-8 text-center max-w-md shadow-2xl">
            Wordle is a fun and challenging word puzzle game where you have 6 chances to guess a 6-letter word. 
            Each guess provides feedback on your attempt, helping you to refine your guesses. Can you guess the word of the day?
        </p>

        <a href="/game" className=" scale-125 bg-blue-500 text-white py-2 px-4
        rounded-lg shadow-2xl hover:bg-blue-600 transition duration-300 ">
            Start Playing
        </a>        
        </div>
    );
}

export default Home;