import Header from '@/components/header/Header';
import type { FC } from 'react';


const MyInfo: FC = ({ }) => {
    return (
        <>
            <div>
                <Header title='About Me' subTitle='Discover My Development Journey' textSiz='sm:text-6xl md:text-7xl lg:text-7xl' />
            </div>
        </>
    );
}
export default MyInfo;