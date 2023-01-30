import * as url from "url";
import Line from "../../components/AnimatedTimeline/line";

export default function Contact (props) {
    return (
        <div>
            <div className={'font-neueThin flex items-center justify-center mt-[50rem] grid grid-cols-2'}>
                <div className={'col-start-2 text-4xl flex items-center relative left-10'}>
                    <Line
                        timeline={props.setRef('contact')}
                        pointId={'contact'}
                        lineId={'contact'}
                        pointTo={'contact1'}/>
                    <div className={'pl-16 mt-8'}>
                        Have some pro tips?
                    </div>
                </div>
            </div>
            <div className={'p-20 h-screen flex items-end justify-center mb-[10rem] relative mt-[30rem]'}>
                <div className={'grid grid-cols-2 justify-center'}>
                    <div className={'bg-[#D9551C] rounded-xl w-[25rem] relative hover:scale-125 transition ease-in-out duration-300'}>
                        <div className={'font-neueBold text-8xl p-10'}>
                            Talk to an Intern!
                        </div>
                        <img src={'/icons8-messages-100.png'} className={'w-10 h-10 invert absolute right-4 bottom-4'}/>
                    </div>
                    <div className={'text-4xl px-10 space-y-10 grid items-center'}>
                        <div>
                            <Line
                                timeline={props.setRef('contact1')}
                                pointId={'contact1'}
                                lineId={'contact1'}
                                pointTo={''}/>
                        </div>
                        <div className={'font-neueThin pt-10'}>
                            Give some advice!
                        </div>
                        <div>
                            <div>
                                Send an intern an email
                            </div>
                            <div className={'font-neueMedium'}>
                                and they’ll get back to
                            </div>
                            <div className={'font-neueBold'}>
                                you as soon as possible!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}