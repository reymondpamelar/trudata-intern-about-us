import Line from "../../components/AnimatedTimeline/line";
import InternDetails from "../../components/internDetails";
import {useEffect, useRef, useState} from "react";

export default function SoftwareEngineering(props){

    return(
        <div className={" grid relative"}>
            <div className={'flex font-neueBold text-7xl relative mt-[80rem]'}>
                <div className={'flex items-center w-full'}>
                    <div className={'h-[10rem] w-full flex justify-start'}>
                        <div id={'softwareDetails1'} className={' hidden animate-slideRight pl-20 w-[35rem]'}>
                            <div>
                                Software Engineering
                                <div className={' font-neueItalic text-sm pt-10'}>
                                    “Software engineering is the application of principles used in the field of engineering, which usually deals with physical systems, to the design, development, testing, deployment and management of software systems.”
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'absolute inset-0 flex items-center justify-center'}>
                        <Line
                            timeline={props.softwareTimeline}
                            pointId={'softwarePoint2'}
                            lineId={'software2'}
                            pointTo={'software3'}/>
                    </div>
                </div>
            </div>
            {
                props.internList === null ?
                    <div></div>
                :
                    (
                        props.internList.filter((intern => intern.engineerType === "software")).map((intern, i) => {
                            if(i === props.internList.filter((intern => intern.engineerType === "software")).length -1){
                                return(
                                    <div className={'relative mt-[50rem]'}>
                                        <div className={'absolute right-64 flex items-end'}>
                                            <InternDetails details={intern} id={'softwareDetails'+(i+2)} lineId={'softwareLine'+(i+1)}/>
                                            <Line key={intern.id} timeline={props.setRef(intern.id)} pointId={'softwarePoint'+(i + 3)} lineId={'software'+(i + 3)} pointTo={'data'+(2)}/>
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <div className={'relative mt-[50rem]'}>
                                    <div className={'absolute right-64 flex items-end'}>
                                        <InternDetails details={intern} id={'softwareDetails'+(i+2)} lineId={'softwareLine'+(i+1)}/>
                                        <Line key={intern.id} timeline={props.setRef(intern.id)} pointId={'softwarePoint'+(i + 3)} lineId={'software'+(i + 3)} pointTo={'software'+(i + 4)}/>
                                    </div>
                                </div>
                            )
                        }
                    ))
            }
            {}
        </div>
    )
}