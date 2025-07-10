import type { FC } from 'react';
import { MyImage } from './MyImage';
import MyInfo from './MyInfo';
import { DockDemo } from './DockDemo';




const AboutMe: FC = ({ }) => {
    return (
        <>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-30'>
                <div>
                    <MyImage />
                </div>
                <div>
                    <MyInfo />
                    <p className='text-white'>
                        I am a Full-Stack Developer with over 3+ years of experience in building modern, scalable, and responsive web
                        applications. I specialize in creating intuitive user interfaces using React.js and Next.js, while also developing
                        robust backend systems with Node.js, Express.js, and MongoDB. I am passionate about learning and
                        problem-solving, and I strive to create meaningful digital solutions that emphasize performance, security, and an
                        excellent user experience. I enjoy collaborating with teams and continuously seek to grow alongside evolving
                        technologies.
                    </p>
                    <DockDemo />
                </div>
            </div>
        </>
    );
}
export default AboutMe;