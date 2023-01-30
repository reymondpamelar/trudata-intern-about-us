import Line from "../../components/AnimatedTimeline/line";
import InternDetails from "../../components/internDetails";
import {useEffect, useRef, useState} from "react";

export default function DataEngineering(props){

    return(
        <div className={" grid relative mt-[20rem]"}>
            <div className={'flex font-neueBold text-7xl relative mt-[50rem]'}>
                <div className={'flex items-center w-full'}>
                    <div className={'h-[10rem] w-full flex justify-end'}>
                        <div id={'dataDetails1'} className={'hidden animate-slideLeft pr-20 w-[35rem] text-right'}>
                            <div>
                                Data Engineering
                                <div className={' font-neueItalic text-sm pt-10'}>
                                    “Software engineering is the application of principles used in the field of engineering, which usually deals with physical systems, to the design, development, testing, deployment and management of software systems.”
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'absolute inset-0 flex items-center justify-center'}>
                        <Line
                            timeline={props.dataTimeline}
                            pointId={'dataPoint2'}
                            lineId={'data2'}
                            pointTo={'data3'}/>
                    </div>
                </div>
            </div>
            {
                props.internList === null ?
                    <div></div>
                    :
                    (
                        props.internList.filter((intern => intern.engineerType === "data")).map((intern, i) => {
                            return (
                                <div className={'relative mt-[50rem]'}>
                                    <div className={'absolute left-64 flex'}>
                                        <Line key={intern.id} timeline={props.setRef(intern.id)} pointId={'dataPoint'+(i + 3)} lineId={'data'+(i + 3)} pointTo={'data'+(i + 4)}/>
                                        <InternDetails details={intern} id={'dataDetails'+(i+2)} lineId={'dataLine'+(i+1)}/>
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