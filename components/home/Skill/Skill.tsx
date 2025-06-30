import Header from '@/components/header/Header';
import type { FC } from 'react';
import IconCloudDemo from './IconCloudDemo';



const Skill: FC = ({ }) => {
    return (
        <>
            <div className='max-w-7xl mx-auto py-7'>
                <div className="py-7">
                    <Header title={"My Skill"} subTitle={'What are My Skills'} />
                </div>
                <div className="">
                    <div className='grid grid-cols-3'>
                        <div>
                            <IconCloudDemo />
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Skill;