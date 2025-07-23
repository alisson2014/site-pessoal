import { Home, About, Projects, Abilities } from 'pages';
import React from 'react';
import { Element } from 'react-scroll';

const HOME = 'home';
const ABOUT = 'about';
const PROJECTS = 'projects';
const ABILITIES = 'abilities';

const LandingPage: React.FC = () => {
    return (
        <>
            <Element name={HOME}>
                <section id={HOME}>
                    <Home />
                </section>
            </Element>
            <Element name={ABOUT}>
                <section id={ABOUT}>
                    <About />
                </section>
            </Element>
            <Element name={PROJECTS}>
                <section id={PROJECTS}>
                    <Projects />
                </section>
            </Element>
            <Element name={ABILITIES}>
                <section id={ABILITIES}>
                    <Abilities />
                </section>
            </Element>
        </>
    );
};

export default LandingPage;