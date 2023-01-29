import DashboardLayout from "../layouts/dashboard";
import Hero from "../containers/dashboard/hero";
import AnimatedTimeline from "../components/AnimatedTimeline";
import React, {createRef, useEffect, useRef, useState} from "react";
import SoftwareEngineering from "../containers/dashboard/softwareEngineering";
import useDynamicRefs from 'use-dynamic-refs';

export default function Home() {
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);
    const timeline6 = useRef(null);

    const requestInternFromServer = async() => {
        const intern = await fetch('https://localhost:44374/api/Intern/getAllInterns', {
            method: 'GET',
        })
        return {
            statusCode: intern.statusCode,
            body: await intern.json()
        }
    }

    const [internList, setInternList] = useState(null)
    const [timelineList, setTimelineList] = useState(null)
    const [getRef, setRef] =  useDynamicRefs();
    useEffect(() => {
        requestInternFromServer().then((intern) => {
            setInternList(intern.body)

        })
    },[])


    return (
        <div>
            <AnimatedTimeline
                timeline1 = {timeline1}
                timeline2 = {timeline2}
                timeline3 = {timeline3}
                timeline4 = {timeline4}
                internList = {internList}
                getRef = {getRef}
            >
                <DashboardLayout>
                    <Hero timeline1={timeline1}/>
                    <SoftwareEngineering
                        timeline2={timeline2}
                        timelineList={timelineList}
                        internList={internList}
                        setRef={setRef}
                    />

                </DashboardLayout>
            </AnimatedTimeline>
        </div>
    )
}
