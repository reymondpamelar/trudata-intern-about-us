import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Timeline = ({ setObserver, callback, props }) => {


    const timeline1 = props.timeline1;
    const timeline2 = props.timeline2;
    const timeline3 = props.timeline3;
    const timeline4 = props.timeline4;
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);

    const someCallback = (i) => {
        if(document.getElementById('details'+i))
            document.getElementById('details'+i).classList.remove('hidden')
    };

    const someCallback2 = () => {
        document.getElementById('details2').classList.remove('hidden')

    };

    const someCallback3 = () => {
        document.getElementById('details3').classList.remove('hidden')

    };

    useEffect(() => {
        setObserver(timeline1.current, ()=>someCallback(1));
        setObserver(timeline2.current, ()=>someCallback(2));
        //setObserver(timeline3.current, someCallback3);
        props.internList?.map((intern, i) => {
            setObserver(props.getRef(intern.id).current, ()=>someCallback(i+3))
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
