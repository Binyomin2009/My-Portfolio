import React from 'react';
import AboutMe from './about-me';
import { IconCloudDemo } from './icon-cloud';

const About = () => {
    return (
        <section className="w-full py-10 px-4 bg-background">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
                <IconCloudDemo />
                <AboutMe />
            </div>
        </section>
    );
};

export default About;
