import * as Icon from "react-feather"
import DarkModeToggle from "../../components/dark-mode/toggle";
import Line from "../../components/AnimatedTimeline/line";
import React, {useEffect, useState} from "react";

export default function Hero(props){

    const [opacity, setOpacity] = useState(90)
    useEffect(() => {

        window.onscroll =()=>{
            const opacity = 100-Math.min( window.scrollY/ 10, 100);
            setOpacity(opacity)
        }
    },[])

    return(
        <div className={'h-screen flex items-end relative'}>
            <div style={{opacity: opacity+'%'}} className={`fixed w-screen h-screen flex items-end`}>
                <img src={'/carlsbad-office.png'} className={'blur-[2px] object-cover h-full w-full opacity-50 brightness-90 '}/>
            </div>
            <div className={'absolute w-screen h-screen flex justify-center items-center'}>
                <div className={'p-10 group'}>
                    <Line timeline={props.timeline1} pointId={'point1'} lineId={'software1'} pointTo={'software2'}/>
                    {/*
                    <div className={'border-b border-white px-2 mb-40 relative'}>
                        <div className={'group-hover:scale-[2.5] group-hover:-translate-y-3 transition ease-in-out duration-500'}>
                            <div className={'animate-bounce'}>
                                <div className={'animate-bounce '}>
                                    <div className={'bg-white rounded-full p-2 animate-bounce'}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */
                    }

                </div>
            </div>
            <div className={'z-10 text-7xl xl:text-8xl m-10 border-b border-black border-zinc-400 mb-10 w-full'}>
                <div className={'pb-16 grid grid-cols-3'}>
                    <div className={'col-span-2 font-neueBold flex items-end pr-16'}>
                        <div>
                            <div className={'text-2xl font-neueBook flex items-center pb-4'}>
                                <Icon.MapPin className={'mr-2'}/> Carlsbad
                            </div>
                            Meet The Interns
                        </div>
                    </div>
                    <div className={'text-sm space-y-8 font-neueBook'}>
                        <div className={'border-b border-black border-zinc-400 pb-8'}>
                            <img src={'/final-trudata-logo white.webp'} className={'mix-blend-exclusion'}/>
                        </div>
                        <div className={'space-y-3'}>
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

                        <div className={'space-y-3'}>
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
    )
}