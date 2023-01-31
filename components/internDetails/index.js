import {useEffect, useRef} from "react";
import 'animate.css';

export default function InternDetails(props) {
    const name = useRef(null)
    const background = useRef(null)
    const img = useRef(null)
    const imgContainer = useRef(null)

    useEffect(() => {
        setInterval( function() {
            if(!document.getElementById(props.id)?.classList.contains('hidden')){
                document.getElementById(props.lineId)?.classList.remove('-translate-x-[35rem]')
                document.getElementById(props.lineId)?.classList.remove('translate-x-[35rem]')
                document.getElementById(props.lineId)?.classList.add('translate-x-0')
                imgContainer.current?.classList.remove('scale-0')
                setTimeout(() => {
                    if(props.details.engineerType === "software"){
                        img.current?.classList.add('-translate-x-8')
                        img.current?.classList.add('-translate-y-8')
                    }
                    if(props.details?.engineerType === "data"){
                        img.current?.classList.add('translate-x-8')
                        img.current?.classList.add('-translate-y-8')
                    }
                },300)
            }
        },10);
    },[])

    if(props.details.engineerType === "data"){
        return(
            <div id={props.id} className={'relative w-[35rem] hidden top-4'}>
                <div className={'absolute left-0 -translate-x-[55%] -translate-y-[50%] hover:z-30'}>
                    <div ref={imgContainer} className={'scale-0 transition ease-in-out duration-300'}>
                        <div ref={img} className={'w-64 h-64 overflow-hidden border rounded-xl absolute transition ease-in-out duration-1000 '}>
                            <img src={props.details?.image} className={'opacity-90 brightness-75 blur-[2px] hover:blur-none hover:brightness-100 transition ease-in-out duration-300'}/>
                        </div>
                        <div  className={'w-64 h-64 border rounded-xl transition ease-in-out duration-300'}>

                        </div>
                    </div>
                </div>
                <div className={'uppercase h-full flex items-center text-4xl absolute -top-8 w-full'}>
                    <div className={'w-full text-right'}>
                        <div ref={name} className={'ml-5 pl-16 font-neueBold animate__animated animate__delay-1s animate__faster animate__fadeInUp'}>
                            {props.details?.username}
                        </div>
                        <div  className={'group overflow-hidden pl-12 z-30'}>
                            <div id={props.lineId} className={'border-b border-white w-full p-1 -translate-x-[35rem] transition ease-in-out duration-1000'}>

                            </div>
                        </div>
                    </div>
                </div>
                <div ref={background} className={'absolute inset-x-0'}>
                    <div className={'overflow-hidden absolute top-0 right-0 text-right'}>
                        <div className={' mt-1 animate__animated animate__delay-1s animate__faster animate__fadeInDown overflow-hidden'}>
                            <div className={'font-neueBold pt-4'}>
                                BACKGROUND
                            </div>
                            <div className={'mt-4 pl-40'}>
                                {props.details?.description}
                            </div>
                            <button onClick={() => window.open(props.details.linkedInURL, "_blank")} className={'mt-4 rounded-full p-0.5 px-6 border text-lg hover:bg-white hover:text-zinc-500 transition ease-in-out duration-200'}>
                                LINKEDIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div id={props.id} className={'relative w-[35rem] hidden top-4'}>
            <div className={'absolute right-0 translate-x-[55%] -translate-y-[50%] hover:z-20'}>
                <div ref={imgContainer} className={'scale-0 transition ease-in-out duration-300'}>
                    <div ref={img} className={'w-64 h-64 flex items-center overflow-hidden border rounded-xl absolute transition ease-in-out duration-1000 '}>
                        <img src={props.details?.image} className={' pt-20 object-fill object-bottom opacity-90 brightness-75 blur-[2px] hover:blur-none hover:brightness-100 transition ease-in-out duration-300'}/>
                    </div>
                    <div  className={'w-64 h-64 border rounded-xl transition ease-in-out duration-300'}>

                    </div>
                </div>
            </div>
            <div className={'uppercase h-full flex items-center text-4xl absolute -top-10 w-full'}>
                <div className={'w-full'}>
                    <div ref={name} className={'mr-5 pr-16 font-neueBold animate__animated animate__delay-1s animate__faster animate__fadeInUp'}>
                        {props.details?.username}
                    </div>
                </div>
            </div>
            <div  className={'group overflow-hidden bottom-0 pr-4 absolute w-full z-30'}>
                <div id={props.lineId} className={'border-b border-white w-full p-1 translate-x-[35rem] transition ease-in-out duration-1000'}>

                </div>
            </div>
            <div ref={background} className={'absolute inset-x-0'}>
                <div className={'overflow-hidden absolute top-0'}>
                    <div className={' mt-1 animate__animated animate__delay-1s animate__faster animate__fadeInDown overflow-hidden'}>
                        <div className={'font-neueBold pt-4'}>
                            BACKGROUND
                        </div>
                        <div className={'mt-4 pr-40'}>
                            {props.details?.description}
                        </div>
                        <button onClick={() => window.open(props.details.linkedInURL, "_blank")} className={'mt-4 rounded-full p-0.5 px-6 border text-lg hover:bg-white hover:text-zinc-500 transition ease-in-out duration-200'}>
                            LINKEDIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}