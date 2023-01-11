import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Timeline = ({ setObserver, callback, props }) => {


    const timeline1 = props.timeline1;
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);

    const someCallback = () => {

        callback();
    };

    const someCallback2 = () => {

    };

    const someCallback3 = () => {

    };

    useEffect(() => {
        setObserver(timeline1.current);
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
                fillColor="#53b374"
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
