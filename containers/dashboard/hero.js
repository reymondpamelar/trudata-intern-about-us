import * as Icon from "react-feather"
import Line from "../../components/AnimatedTimeline/line";
import React, {useEffect, useState} from "react";
import 'animate.css'
import animationData from "/public/40587-scroll.json";
import Lottie from "react-lottie";

export default function Hero(props){

    const [opacity, setOpacity] = useState(90)
    useEffect(() => {

        window.onscroll =()=>{
            const opacity = 100-Math.min( window.scrollY/ 10, 100);
            setOpacity(opacity)
        }
    },[])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };

    return(
        <div className={'h-screen flex items-end relative '}>
            <div style={{opacity: opacity+'%'}} className={`fixed w-screen h-screen flex items-end `}>
                <img src={'/carlsbad-office.jpeg'} className={'grayscale blur-[4px] object-cover h-full w-full opacity-50 brightness-50 object-bottom animate__animated animate__fadeInUp '}/>
            </div>
            <div className={'absolute w-screen h-screen flex justify-center items-center'}>
                <div className={'p-10 group'}>
                    <Line timeline={props.timeline1} pointId={'point1'} lineId={'software1'} pointTo={'software2'}/>
                    <div style={{opacity: opacity+'%', display:`${opacity === 0 ? "none" :"inline"}`}} className={'fixed flex justify-center items-end '}>
                        <div className={'invert w-[80rem] cursor-none'}>
                            <div className={'cursor-none w-[16rem] md:w-[20rem] relative top-0 -left-[7rem] md:-left-[9rem]'}>
                                <Lottie
                                    isClickToPauseDisabled={true}
                                    options={defaultOptions}
                                />
                                <div className={'absolute inset-0'}>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={'z-10 text-7xl xl:text-8xl m-10 border-b border-black border-zinc-400 mb-10 w-full'}>
                <div className={'pb-16 grid grid-cols-3'}>
                    <div className={'col-span-2 font-neueBold flex items-end pr-16 overflow-hidden'}>
                        <div className={'animate__animated animate__slow animate__fadeInUp'}>
                            <div className={'text-2xl font-neueBook flex items-center pb-4'}>
                                <Icon.MapPin className={'mr-2'}/> Carlsbad
                            </div>
                            Meet The Interns
                        </div>
                    </div>
                    <div className={'text-sm font-neueBook overflow-hidden z-50'}>
                        <div className={'border-b border-black border-zinc-400 pb-8 overflow-hidden '}>
                            <img src={'/final-trudata-logo white.webp'} className={'mix-blend-exclusion animate__animated animate__slow animate__fadeInUp'}/>
                        </div>
                        <div className={'overflow-hidden space-y-8 pt-8'}>
                            <div className={'space-y-3 overflow-hidden animate__animated animate__slow animate__fadeInDown'}>
                                <div className={'font-neueBold text-lg'}>
                                    Software Engineering
                                </div>
                                {props.internList?.map((intern)=>{
                                    if(intern.engineerType === "software"){
                                        return(
                                            <div>
                                                {intern.username}
                                            </div>
                                        )
                                    }
                                })}
                            </div>

                            <div className={'space-y-3 animate__animated animate__slow animate__fadeInDown'}>
                                <div className={'font-neueBold text-lg'}>
                                    Data Engineering
                                </div>
                                {props.internList?.map((intern)=>{
                                    if(intern.engineerType === "data"){
                                        return(
                                            <div>
                                                {intern.username}
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}