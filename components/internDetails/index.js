import {useEffect, useRef} from "react";
import 'animate.css';

export default function InternDetails(props) {
    const name = useRef(null)
    const background = useRef(null)
    const img = useRef(null)
    const imgContainer = useRef(null)

    useEffect(() => {
        setInterval( function() {
            if(!document.getElementById(props.id).classList.contains('hidden')){
                document.getElementById(props.lineId).classList.remove('translate-x-[35rem]')
                document.getElementById(props.lineId).classList.add('translate-x-0')
                imgContainer.current.classList.remove('scale-0')
                setTimeout(() => {
                    img.current.classList.add('-translate-x-8')
                    img.current.classList.add('-translate-y-8')
                },1000)
            }
        },10);
    },[])

    return(
        <div id={props.id} className={'relative w-[35rem] hidden'}>
            <div className={'absolute right-0 translate-x-[55%] -translate-y-[50%] '}>
                <div ref={imgContainer} className={'scale-0 transition ease-in-out duration-1000'}>
                    <div ref={img} className={'w-64 h-40 overflow-hidden border rounded-xl absolute transition ease-in-out duration-1000 '}>
                        <img src={'/carlsbad-office.png'} className={'opacity-90 brightness-75 blur-sm'}/>
                    </div>
                    <div  className={'w-64 h-40 border rounded-xl transition ease-in-out duration-1000'}>

                    </div>
                </div>
            </div>
            <div className={'uppercase h-full flex items-center text-4xl absolute -top-8 w-full'}>
                <div className={'w-full'}>
                    <div ref={name} className={'mr-5 pr-16 font-neueBold animate__animated animate__delay-1s animate__faster animate__fadeInUp'}>
                        Reymond Pamelar
                    </div>
                    <div  className={'group overflow-hidden pr-4'}>
                        <div id={props.lineId} className={'border-b border-zinc-700 dark:border-white w-full p-1 translate-x-[35rem] transition ease-in-out duration-1000'}>

                        </div>
                    </div>
                </div>
            </div>
            <div ref={background} className={'absolute inset-x-0'}>
                <div className={'overflow-hidden absolute top-0'}>
                    <div className={' mt-1 animate__animated animate__delay-1s animate__faster animate__fadeInDown overflow-hidden'}>
                        <div className={'font-neueBold pt-4'}>
                            BACKGROUND
                        </div>
                        <div className={'mt-4 pr-32'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <button className={'mt-4 rounded-full p-0.5 px-6 border text-lg hover:bg-white hover:text-zinc-500 transition ease-in-out duration-200'}>
                            LINKEDIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}