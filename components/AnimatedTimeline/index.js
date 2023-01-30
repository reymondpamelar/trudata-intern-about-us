import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import 'animate.css';

const Timeline = ({ setObserver, callback, props }) => {

    const timeline1 = props.timeline1;
    const softwareTimeline = props.softwareTimeline;
    const dataTimeline = props.dataTimeline

    const someCallback = (engineerType,i) => {
        console.log(i+2)
        if(document.getElementById(engineerType+'Details'+i))
            document.getElementById(engineerType+'Details'+i).classList.remove('hidden')
    };

    useEffect(() => {
        setObserver(timeline1.current, ()=>someCallback("software",1));

        setObserver(props.getRef("softwareLine1").current);
        setObserver(props.getRef("softwareLine2").current);
        setObserver(props.getRef("softwareLine3").current);
        setObserver(softwareTimeline.current, ()=>someCallback("software",2));

        props.internList?.filter((intern => intern.engineerType === "software")).map((intern, i) => {
            if(intern.engineerType === "software"){
                if(i === props.internList.filter((intern => intern.engineerType === "software")).length -1){
                    setObserver(props.getRef(intern.id).current, ()=>someCallback("data", 1))

                }else{
                    setObserver(props.getRef(intern.id).current, ()=>someCallback("software",i+3))
                }
            }
        })

        setObserver(props.getRef("dataLine1").current);
        setObserver(props.getRef("dataLine2").current);
        setObserver(props.getRef("dataLine3").current);
        setObserver(dataTimeline.current, ()=>someCallback("data",2));

        props.internList?.filter((intern => intern.engineerType === "data")).map((intern, i) => {
            if(intern.engineerType === "data"){
                setObserver(props.getRef(intern.id).current, ()=>someCallback("data",i+3))
            }
        })
    }, []);


    return (
        <div className={''}>
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
