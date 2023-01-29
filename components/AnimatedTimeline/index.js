import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Timeline = ({ setObserver, callback, props }) => {

    const timeline1 = props.timeline1;
    const softwareTimeline = props.softwareTimeline;
    const dataTimeline = props.dataTimeline

    const someCallback = (engineerType,i) => {
        if(document.getElementById(engineerType+'Details'+i))
            document.getElementById(engineerType+'Details'+i).classList.remove('hidden')
    };

    useEffect(() => {
        setObserver(timeline1.current, ()=>someCallback("software",1));
        setObserver(softwareTimeline.current, ()=>someCallback("software",2));
        props.internList?.map((intern, i) => {
            if(intern.engineerType === "software"){
                setObserver(props.getRef(intern.id).current, ()=>someCallback("software",i+3))
            }
        })

        setObserver(dataTimeline.current, ()=>someCallback("data",1));
        props.internList?.map((intern, i) => {
            if(intern.engineerType === "data"){
                setObserver(props.getRef(intern.id).current, ()=>someCallback("data",i+3))
            }
        })
    }, []);


    return (
        <div>
            {props.children}
        </div>
    );
};

export default function AnimatedTimeline(props) {
    const [message, setMessage] = useState("");

    const onCallback = () => {
        console.log("awesome");
    };

    const TimelineObserver = dynamic(() => import('react-timeline-animation'), {ssr:false})

    return (
        <div>
            <TimelineObserver
                initialColor="#e5e5e500"
                fillColor="#ffffff"
                hasReverse
                handleObserve={(setObserver) => (
                    <Timeline
                        callback={onCallback}
                        className="timeline"
                        setObserver={setObserver}
                        props = {props}
                    />
                )}
            />;
        </div>
    );
}
