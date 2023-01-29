import DashboardLayout from "../layouts/dashboard";
import Hero from "../containers/dashboard/hero";
import AnimatedTimeline from "../components/AnimatedTimeline";
import React, {createRef, useEffect, useRef, useState} from "react";
import SoftwareEngineering from "../containers/dashboard/softwareEngineering";
import useDynamicRefs from 'use-dynamic-refs';
import DataEngineering from "../containers/dashboard/dataEngineering";

export default function Home() {
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const softwareTimeline = useRef(null);
    const dataTimeline = useRef(null);

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
                softwareTimeline = {softwareTimeline}
                dataTimeline = {dataTimeline}
                internList = {internList}
                getRef = {getRef}
            >
                <DashboardLayout>
                    <Hero timeline1={timeline1} internList={internList}/>
                    <SoftwareEngineering
                        softwareTimeline={softwareTimeline}
                        timelineList={timelineList}
                        internList={internList}
                        setRef={setRef}
                    />
                    <DataEngineering
                        dataTimeline={dataTimeline}
                        timelineList={timelineList}
                        internList={internList}
                        setRef={setRef}
                    />

                </DashboardLayout>
            </AnimatedTimeline>
        </div>
    )
}
