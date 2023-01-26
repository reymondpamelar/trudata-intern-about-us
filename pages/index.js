import DashboardLayout from "../layouts/dashboard";
import Hero from "../containers/dashboard/hero";
import AnimatedTimeline from "../components/AnimatedTimeline";
import React, { useEffect, useRef, useState } from "react";
import Xarrow, {Xwrapper} from "react-xarrows";
import Line from "../components/AnimatedTimeline/line";

export default function Home() {
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);
    const timeline6 = useRef(null);


    return (
        <div>
            <AnimatedTimeline timeline1 = {timeline1} timeline2 = {timeline2} timeline3 = {timeline3} timeline4 = {timeline4}>
                <DashboardLayout>
                    <Hero timeline1={timeline1}/>
                    <div className={" grid"}>
                        <div className={'flex font-neueBold text-7xl relative w-1/2'}>
                            <div>
                                Software Engineering
                            </div>
                            <div className={'absolute right-0 inset-y-0 flex items-center'}>
                                <Line timeline={timeline2} lineId={'2'} pointTo={'3'}/>
                            </div>
                        </div>
                        <div className={'relative left-48 h-[50rem] flex items-end'}>
                            <Line timeline={timeline3} lineId={'3'} pointTo={"4"}/>
                        </div>
                        <div className={'relative left-48 h-[50rem] flex items-end'}>
                            <Line timeline={timeline4} lineId={'4'} pointTo={""}/>
                        </div>
                        <div className={'relative left-48 h-[50rem] flex items-end'}>
                        </div>
                    </div>

                </DashboardLayout>
            </AnimatedTimeline>
        </div>
    )
}
