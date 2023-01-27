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

    const someCallback = () => {
        document.getElementById('details1').classList.remove('hidden')
        callback();
    };

    const someCallback2 = () => {
        document.getElementById('details2').classList.remove('hidden')

    };

    const someCallback3 = () => {
        document.getElementById('details3').classList.remove('hidden')

    };

    useEffect(() => {
        setObserver(timeline1.current, someCallback);
        setObserver(timeline2.current, someCallback2);
        setObserver(timeline3.current, someCallback3);
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
