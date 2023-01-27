import {useEffect, useRef} from "react";
import 'animate.css';

export default function InternDetails(props) {
    const name = useRef(null)
    const background = useRef(null)
    useEffect(() => {
        setInterval( function() {
            if(!document.getElementById(props.id).classList.contains('hidden')){
                document.getElementById(props.lineId).classList.remove('translate-x-[27rem]')
                document.getElementById(props.lineId).classList.add('translate-x-0')
            }
        },10);
    },[])

    return(
        <div id={props.id} className={'relative w-[27rem] hidden'}>
            <div className={'uppercase h-full flex items-center text-4xl absolute -top-8'}>
                <div>
                    <div ref={name} className={'mr-5 pr-10 font-neueBold animate__animated animate__delay-1s animate__fadeInUp'}>
                        Reymond Pamelar
                    </div>
                    <div  className={'cursor-pointer font-asap tracking-widest text-lg group overflow-hidden'}>
                        <div id={props.lineId} className={'border-b border-zinc-700 dark:border-white w-full p-1 translate-x-[27rem] transition ease-in-out duration-1000'}>

                        </div>
                    </div>
                </div>
            </div>
            <div ref={background} className={'absolute inset-x-0'}>
                <div className={'overflow-hidden absolute top-0'}>
                    <div className={' mt-1 animate__animated animate__delay-1s animate__fadeInDown overflow-hidden'}>
                        <div className={'font-neueBold pt-4'}>
                            BACKGROUND
                        </div>
                        <div className={'mt-4'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}