import * as url from "url";
import Line from "../../components/AnimatedTimeline/line";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import TextInput from "../../components/ui/form/textInput";
import TextBox from "../../components/ui/form/textBox";
import * as Icon from 'react-feather'
import Dropdown from "../../components/ui/dropdown";

export default function Contact (props) {

    function handleClick(){
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            background: '#27272a',
            confirmButtonColor: '#59981A',
            width: 500,
            showConfirmButton: false,
            showClass: {
                popup: 'animate__animated animate__zoomIn animate__faster cursor-default',
            },
            hideClass: {
                popup: 'animate__animated animate__zoomOut animate__faster cursor-default',
            },
            showCloseButton: true,
            closeButtonHtml: <Icon.XCircle className={'cursor-default'}/>,
            html:
                <div className=" p-4 cursor-default text-zinc-300 text-left">
                    <div className={'space-y-10 cursor-default'}>
                        <div className={'text-5xl font-neueBold'}>
                            Contact Form
                        </div>
                        <div className={'space-y-4'}>
                            <div>
                                Choose an intern:
                            </div>
                            <Dropdown interns = {props.internList}/>
                        </div>
                        <TextInput
                            label={'Title'}
                            placeholder={'Title'}
                        />
                        <TextBox
                            label={'Message'}
                            placeholder={'Message'}
                        />
                    </div>
                </div>
        })
    }

    return (
        <div>
            <div className={'font-neueThin flex items-center justify-center mt-[50rem] grid grid-cols-2'}>
                <div className={'col-start-2 text-4xl flex items-center relative left-10'}>
                    <Line
                        timeline={props.setRef('contact')}
                        pointId={'contact'}
                        lineId={'contact'}
                        pointTo={'contact1'}/>
                    <div className={'pl-16 mt-8 h-[4rem] '}>
                        <div id={'contactDetails'} className={'animate-slideLeft hidden'}>
                            Have some pro tips?
                        </div>
                    </div>
                </div>
            </div>
            <div className={'p-20 h-screen flex items-end justify-center mb-[10rem] relative mt-[30rem]'}>
                <div className={'grid grid-cols-2 justify-center'}>
                    <button onClick={() => handleClick()} className={'text-left shadow-2xl bg-[#D9551C] rounded-xl w-[25rem] relative hover:scale-125 transition ease-in-out duration-300'}>
                        <div className={'font-neueBold text-8xl p-10'}>
                            Talk to an Intern!
                        </div>
                        <img src={'/icons8-messages-100.png'} className={'w-10 h-10 invert absolute right-4 bottom-4'}/>
                    </button>
                    <div className={'text-4xl px-10 space-y-10 grid items-center'}>
                        <div>
                            <Line
                                timeline={props.setRef('contact1')}
                                pointId={'contact1'}
                                lineId={'contact1'}
                                pointTo={''}/>
                        </div>
                        <div className={' w-[30rem] h-[20rem]'}>
                            <div id={'contactDetails1'} className={'space-y-10 grid items-center hidden animate-slideLeft transition ease-in-out duration-300'}>
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
            </div>
        </div>
    )
}