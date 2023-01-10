export default function Hero(){

    return(
        <div className={'h-screen flex items-end relative'}>
            <div className={'text-8xl m-10 border-b border-black mb-10 w-full'}>
                <div className={'pb-16 grid grid-cols-3'}>
                    <div className={'col-span-2 font-neueBold flex items-end pr-16'}>
                        Meet The Interns
                    </div>
                    <div className={'text-lg space-y-8'}>
                        <div className={'border-b border-black pb-8'}>
                            TRU DATA
                        </div>
                        <div className={'space-y-3'}>
                            <div className={'font-neueBold text-xl'}>
                                Software Engineering
                            </div>
                            <div className={''}>
                                Reymond Pamelar
                            </div>
                            <div className={''}>
                                Connor Toro
                            </div>
                        </div>

                        <div className={'space-y-3'}>
                            <div className={'font-neueBold text-xl'}>
                                Data Engineering
                            </div>
                            <div className={''}>
                                Reymond Pamelar
                            </div>
                            <div className={''}>
                                Connor Toro
                            </div>
                            <div className={''}>
                                Reymond Pamelar
                            </div>
                            <div className={''}>
                                Connor Toro
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}