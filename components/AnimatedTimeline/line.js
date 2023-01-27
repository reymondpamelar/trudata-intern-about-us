import React, {useEffect, useRef, useState} from "react";

export default function Line(props){

    const point = useRef(null);
    const [degree, setDegree] = useState(0)
    const [height, setHeight] = useState(0)

    const observer = new ResizeObserver(
        () => drawLine()
    )
    useEffect(() => {
        observer.observe(document.getElementById('main'))
    }, []);



    function getDistance(x1, y1, x2, y2){
        let y = x2 - x1;
        let x = y2 - y1;

        return Math.sqrt(x * x + y * y);
    }

    function drawLine(){
        console.log(props.lineId)
        var pointer = point.current,
            pointerBox = pointer?.getBoundingClientRect(),
            centerPoint = window.getComputedStyle(pointer).transformOrigin,
            centers = centerPoint.split(" "),
            centerY = pointerBox.top,
            centerX = pointerBox.left

        var element = document.getElementById(props.pointTo);
        var position = element?.getBoundingClientRect();
        var x = position?.left;
        var y = position?.top;
        var radians = Math.atan2(x - centerX, y - centerY);
        var degree = (radians * (180 / Math.PI) * -1) + 180;
        //pointer.style.transform = "rotate("+degree+"deg)";
        setDegree(degree-180)
        setHeight(getDistance(centerX, centerY, x, y))
        console.log(x, y, "degree: " +degree)
        console.log(element)
    }

    const showDetails = () => {
        document.getElementById(props.details).classList.remove('hidden')
    };


    return(
        <div className={'relative flex items-center'}>
            <div className={'p-2 border border-white rounded-full absolute'}>
                <div ref={point} id={props.lineId} className={'p-2 bg-white rounded-full relative'}>
                    <div style={{rotate: +degree+"deg", height:height}} ref={props.timeline} id={props.pointId} className={`origin-top w-[0.1rem] absolute`} />
                </div>
            </div>
        </div>
    )
}