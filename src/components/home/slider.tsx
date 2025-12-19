import { useRef } from 'react';
import MineCard from "./MineCard";
import { useScroll } from 'framer-motion';
import { projects } from './projects';

function Slider() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });
    
    return (
        <section className="py-12 bg-gray-50 dark:bg-black w-full">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header Section - Same as Portfolio */}
                <div className="relative min-h-[70vh] mb-16">
                    {/* Top-Left: Our Portfolio */}
                    <div className="absolute top-4 left-0 z-10">
                        <h2
                            className="text-xs font-normal text-black dark:text-white uppercase tracking-wide"
                            style={{ fontFamily: '"Urbanist", serif', fontSize: '12px' }}
                        >
                            Our Portfolio
                        </h2>
                    </div>

                    {/* Center-Left: Large Headline */}
                    <div className="flex items-center justify-start pt-20 pb-16 z-10 relative">
                        <h3
                            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black dark:text-white leading-[1.1]"
                            style={{ fontFamily: '"Urbanist", serif' }}
                        >
                            Our Best Works<br />
                            of All Time
                        </h3>
                    </div>

                    {/* Bottom-Right: Description */}
                    <div className="absolute bottom-4 right-0 text-right max-w-sm z-10">
                        <p
                            className="text-sm text-black dark:text-white leading-relaxed"
                            style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
                        >
                            Check out our portfolios to get<br />
                            to know our work better
                        </p>
                    </div>
                </div>
            
            <div ref={container}>
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.02);
                    return (
                        <MineCard 
                            description={''} 
                            url={''} 
                            key={`p_${i}`}
                            i={i}
                            {...project}
                            progress={scrollYProgress}
                            range={[i * .25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
            </div>
        </section>
    );
}

export default Slider;