import DashboardLayout from "../layouts/dashboard";
import Hero from "../containers/dashboard/hero";
import AnimatedTimeline from "../components/AnimatedTimeline";
import React, {createRef, useEffect, useRef, useState} from "react";
import SoftwareEngineering from "../containers/dashboard/softwareEngineering";
import useDynamicRefs from 'use-dynamic-refs';
import DataEngineering from "../containers/dashboard/dataEngineering";
import Contact from "../containers/dashboard/contact";

export default function Home() {
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const softwareTimeline = useRef(null);
    const dataTimeline = useRef(null);

    const requestInternFromServer = async() => {
        const intern = await fetch('https://localhost:7083/api/Intern/getAllInterns', {
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
        <div className={'bg-zinc-800'}>
            <AnimatedTimeline
                timeline1 = {timeline1}
                softwareTimeline = {softwareTimeline}
                dataTimeline = {dataTimeline}
                internList = {internList}
                getRef = {getRef}
            >
                <DashboardLayout>
                    <Hero timeline1={timeline1} internList={internList}/>
                    <div className={'grid justify-center'}>
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
                        <Contact
                            internList={internList}
                            setRef={setRef}
                        />
                    </div>

                </DashboardLayout>
            </AnimatedTimeline>
        </div>
    )
}
