import DashboardLayout from "../layouts/dashboard";
import Hero from "../containers/dashboard/hero";
import AnimatedTimeline from "../components/AnimatedTimeline";
import React, { useEffect, useRef, useState } from "react";
import Line from "../components/AnimatedTimeline/line";

export default function Home() {
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);
    const timeline6 = useRef(null);

    function handleCallback(callback, setCallback){
        setCallback(!callback)
    }



    return (
        <div>
            <AnimatedTimeline
                timeline1 = {timeline1}
                timeline2 = {timeline2}
                timeline3 = {timeline3}
                timeline4 = {timeline4}
            >
                <DashboardLayout>
                    <Hero timeline1={timeline1}/>
                    <div className={" grid"}>
                        <div className={'flex font-neueBold text-7xl relative w-1/2 mt-[30rem]'}>
                            <div className={'flex items-center w-full'}>
                                <div className={'h-[10rem] w-full flex justify-end'}>
                                    <div id={'details1'} className={' hidden animate-slideRight px-20 w-[35rem]'}>
                                        <div>
                                            Software Engineering
                                            <div className={' font-neueItalic text-sm pt-10'}>
                                                “Software engineering is the application of principles used in the field of engineering, which usually deals with physical systems, to the design, development, testing, deployment and management of software systems.”
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Line
                                    details={'details1'}
                                    timeline={timeline2}
                                    pointId={'point2'}
                                    lineId={'2'}
                                    pointTo={'3'}/>
                            </div>
                        </div>
                        <div className={'relative left-64 h-[50rem] flex items-end'}>
                            <Line timeline={timeline3} pointId={'point3'} lineId={'3'} pointTo={"4"}/>
                        </div>
                        <div className={'relative left-10 h-[50rem] flex items-end'}>
                            <Line timeline={timeline4} pointId={'point4'} lineId={'4'} pointTo={""}/>
                        </div>
                        <div className={'relative left-48 h-[50rem] flex items-end'}>
                        </div>
                    </div>

                </DashboardLayout>
            </AnimatedTimeline>
        </div>
    )
}
