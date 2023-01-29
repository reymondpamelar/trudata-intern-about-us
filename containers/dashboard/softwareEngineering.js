import Line from "../../components/AnimatedTimeline/line";
import InternDetails from "../../components/internDetails";
import {useEffect, useRef, useState} from "react";

export default function SoftwareEngineering(props){
    const timeline2 = props.timeline2,
        timeline3 = props.timeline3,
        timeline4 = props.timeline4

    return(
        <div className={" grid relative"}>
            <div className={'flex font-neueBold text-7xl relative w-1/2 mt-[50rem]'}>
                <div className={'flex items-center w-full'}>
                    <div className={'h-[10rem] w-full flex justify-end'}>
                        <div id={'details1'} className={' hidden animate-slideRight px-20 w-[35rem]'}>
                            <div>
                                Software Engineering
                                <div className={' font-neueItalic text-sm pt-10'}>
                                    “Software engineering is the application of principles used in the field of engineering, which usually deals with physical systems, to the design, development, testing, deployment and management of software systems.”
                                </div>
                            </div>
                        </div>
                    </div>
                    <Line
                        timeline={timeline2}
                        pointId={'point2'}
                        lineId={'2'}
                        pointTo={'3'}/>
                </div>
            </div>
            {
                props.internList === null ?
                    <div></div>
                :
                    (
                        props.internList.map((intern, i) => {
                            console.log('details'+(i+2))
                            return (
                                <div className={'relative mt-[50rem]'}>
                                    <div className={'absolute right-64 flex items-end'}>
                                        <InternDetails details={intern} id={'details'+(i+2)} lineId={'line'+(i+1)}/>
                                        <Line key={intern.id} timeline={props.setRef(intern.id)} pointId={'point'+(i + 3)} lineId={''+(i + 3)} pointTo={''+(i + 4)}/>
                                    </div>
                                </div>
                            )
                        }
                    ))
            }
            {}

            <div className={'relative mt-[100rem]'}>

            </div>
        </div>
    )
}