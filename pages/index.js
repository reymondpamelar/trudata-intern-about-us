import DashboardLayout from "../layouts/dashboard";
import Hero from "../containers/dashboard/hero";
import AnimatedTimeline from "../components/AnimatedTimeline";
import React, { useEffect, useRef, useState } from "react";
import Xarrow, {Xwrapper} from "react-xarrows";

export default function Home() {
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const [degree, setDegree] = useState(0)
    const [height, setHeight] = useState(0)
    function onClick(){
        console.log('asda')
        console.log(document.getElementById("timeline1"))
        var pointer = document.getElementById("timeline1"),
            pointerBox = pointer.getBoundingClientRect(),
            centerPoint = window.getComputedStyle(pointer).transformOrigin,
            centers = centerPoint.split(" "),
            centerY = pointerBox.top,
            centerX = pointerBox.left

        var element = document.getElementById('timeline2');
        var position = element.getBoundingClientRect();
        var x = position.left;
        var y = position.top;
        var radians = Math.atan2(x - centerX, y - centerY);
        var degree = (radians * (180 / Math.PI) * -1) + 180;
        //pointer.style.transform = "rotate("+degree+"deg)";
        setDegree(degree-180)
        setHeight(getDistance(centerX, centerY, x, y))
        console.log(height)
    }


    function getDistance(x1, y1, x2, y2){
        let y = x2 - x1;
        let x = y2 - y1;

        return Math.sqrt(x * x + y * y);
    }
    return (
        <div>
            <AnimatedTimeline timeline1 = {timeline1} timeline2 = {timeline2} timeline3 = {timeline3}>
                <DashboardLayout>
                    <Hero/>
                    <div className={'flex justify-center '}>
                        <div className={'p-2 rounded-xl bg-red-400'}>

                        </div>
                    </div>
                    <div className={"flex justify-center grid"}>
                        <div className={'h-40'}>
                            <div style={{rotate: +degree+"deg", height:height}} id="timeline1" ref={timeline1} className={`origin-top w-[0.2rem]`} />
                        </div>
                        <div className={'relative left-48'}>
                            <div id="timeline2" ref={timeline2} className="h-[30rem] w-[2rem]" />
                        </div>
                        <div id="timeline3" ref={timeline3} className="h-[50rem] w-[2rem] w-2" />
                    </div>
                    <button onClick={onClick}>click me</button>

                </DashboardLayout>
            </AnimatedTimeline>
        </div>
    )
}
