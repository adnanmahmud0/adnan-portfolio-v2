import type { FC } from 'react';
import { RainbowButton } from '../magicui/rainbow-button';
import { TextAnimate } from '../magicui/text-animate';


interface HeaderProps {
    title: string;
    subTitle: string;
}

const Header: FC<HeaderProps> = ({ title, subTitle }) => {
    return (
        <>

            <div className='max-w-7xl mx-auto py-7'>
                <div className="py-7">
                    <RainbowButton className='cursor-none' variant="outline">🟢 {title}</RainbowButton>
                </div>
                <div className="py-7">
                    <TextAnimate className='text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl dark:text-white text-black max-w-4xl' animation="blurInUp" by="character" once>
                        {subTitle}
                    </TextAnimate>
                </div>
            </div>

        </>
    );
}
export default Header;