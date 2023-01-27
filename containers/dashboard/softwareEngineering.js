import Line from "../../components/AnimatedTimeline/line";
import InternDetails from "../../components/internDetails";

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
                        details={'details1'}
                        timeline={timeline2}
                        pointId={'point2'}
                        lineId={'2'}
                        pointTo={'3'}/>
                </div>
            </div>
            <div className={'relative mt-[50rem]'}>
                <div className={'absolute right-64 flex items-end'}>
                    <InternDetails id={'details2'} lineId={'line1'}/>
                    <Line timeline={timeline3} pointId={'point3'} lineId={'3'} pointTo={"4"}/>
                </div>
            </div>
            <div className={'relative mt-[50rem]'}>
                <div className={'absolute right-64 flex items-end'}>
                    <InternDetails id={'details3'} lineId={'line2'}/>
                    <Line timeline={timeline4} pointId={'point4'} lineId={'4'} pointTo={""}/>
                </div>
            </div>
            <div className={'relative left-48 h-[50rem] flex items-end'}>
            </div>
        </div>
    )
}