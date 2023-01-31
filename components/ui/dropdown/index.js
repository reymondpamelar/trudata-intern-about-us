import React, {useState, useEffect} from 'react'
import * as Icon from 'react-feather'

const Dropdown = (props) => {
    const [currentIntern, setCurrentIntern] = useState(props.interns[0].username)

    const [hidden, setHidden] = useState(true)
    const buttonRef = React.createRef()
    const dropdownRef = React.createRef()
    useEffect(() => {
        const handleClickOutside = event => {
            if (hidden ||
                buttonRef.current.contains(event.target) ||
                dropdownRef.current.contains(event.target)
            ) {
                return false
            }
            setHidden(!hidden)
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef, buttonRef])


    return (
        <div className="text-zinc-300 relative">
            <div ref={buttonRef} onClick={() => setHidden(!hidden)} className={'bg-zinc-700 rounded-xl h-16 flex items-center justify-center shadow-lg relative transition ease-in-out duration-200 hover:bg-[#D9551C]'}>
                {currentIntern}
                <div className={`absolute right-4 transition ease-in-out duration-200 ${hidden ? 'rotate-180' : ''}`}>
                    <Icon.ChevronUp/>
                </div>
            </div>
            <div ref={dropdownRef} className={'overflow-hidden w-full absolute top-20 inset-x-0 rounded-xl'}>
                <div className={`overflow-hidden animate__animated animate__faster animate__fadeInDown overflow-hidden bg-zinc-700 rounded-xl w-full grid items-center shadow-lg ${hidden ? 'hidden' : 'open'}`}>
                    {props.interns.map((intern, i) => {
                        return(
                            <div onClick={() => {
                                setCurrentIntern(intern.username)
                                setHidden(true)
                                props.setIntern(intern.email)
                            }} className={'hover:bg-[#D9551C] cursor-pointer w-full p-4'}>
                                <div className={'cursor-pointer w-full'}>
                                    {intern.username}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dropdown