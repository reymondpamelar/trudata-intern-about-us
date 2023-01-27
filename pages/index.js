import DashboardLayout from "../layouts/dashboard";
import Hero from "../containers/dashboard/hero";
import AnimatedTimeline from "../components/AnimatedTimeline";
import React, { useEffect, useRef, useState } from "react";
import Line from "../components/AnimatedTimeline/line";
import InternDetails from "../components/internDetails";
import SoftwareEngineering from "../containers/dashboard/softwareEngineering";

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
                    <SoftwareEngineering
                        timeline2={timeline2}
                        timeline3={timeline3}
                        timeline4={timeline4}
                    />

                </DashboardLayout>
            </AnimatedTimeline>
        </div>
    )
}
