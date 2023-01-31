import Line from "../../components/AnimatedTimeline/line";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import TextInput from "../../components/ui/form/textInput";
import TextBox from "../../components/ui/form/textBox";
import * as Icon from 'react-feather'
import Dropdown from "../../components/ui/dropdown";
import {useState} from "react";
import {useForm} from 'react-hook-form'

export default function Contact (props) {

    const [showForm, setShowForm] = useState(false)
    const [intern, setIntern] = useState('')
    const [from, setFrom] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const {register, handleSubmit, watch, formState: { errors }} = useForm()

    const requestSendEmailFromServer = async(message) => {
        const request = await fetch('https://localhost:7083/sendEmail', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                address: message.intern,
                recipient: message.from,
                title: message.title,
                body: message.body
            })
        })
        return {
            statusCode: request.statusCode,
        }
    }
    const onSubmit = async data => {
        console.log(intern, from, title, body)
        const message = {
            intern,
            from,
            title,
            body
        }
        await requestSendEmailFromServer(message)
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
            <div className={'p-20 h-screen flex items-end justify-center mb-[20rem] relative mt-[10rem]'}>
                <div className={'grid grid-cols-2 justify-center'}>
                    <div className={'flex justify-end px-20'}>
                        <button onClick={() => setShowForm(true)} className={'text-left shadow-2xl bg-[#D9551C] rounded-xl w-[25rem] relative hover:scale-125 transition ease-in-out duration-300'}>
                            <div className={'font-neueBold text-8xl p-10'}>
                                Talk to an Intern!
                            </div>
                            <img src={'/icons8-messages-100.png'} className={'w-10 h-10 invert absolute right-4 bottom-4'}/>
                        </button>
                    </div>
                    <div className={'text-4xl px-10 space-y-10 grid items-center relative bottom-20 '}>
                        <div>
                            <Line
                                timeline={props.setRef('contact1')}
                                pointId={'contact1'}
                                lineId={'contact1'}
                                pointTo={''}/>
                        </div>
                        <div className={' w-[30rem] h-[20rem] relative'}>
                            {showForm ?
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)} className=" animate-slideRight pt-4 cursor-default text-zinc-300 text-left">
                                        <div className={'space-y-6 cursor-default'}>
                                            <div className={'text-5xl font-neueBold'}>
                                                Contact Form
                                            </div>
                                            <div className={'space-y-4 text-lg'}>
                                                <div>
                                                    Choose an intern:
                                                </div>
                                                <Dropdown interns = {props.internList} setIntern={setIntern}/>
                                            </div>
                                            <div className={'text-base space-y-6'}>
                                                <TextInput
                                                    name={'address'}
                                                    formhook={register("address", {required: true})}
                                                    type="email"
                                                    label={'From *'}
                                                    placeholder={'Who is this from?'}
                                                    value={from}
                                                    onChange={(e) => {
                                                        e.preventDefault()
                                                        setFrom(e.target.value)
                                                    }}
                                                />
                                                <TextInput
                                                    label={'title'}
                                                    formhook={register("title", {required: true})}
                                                    label={'Title *'}
                                                    placeholder={'Please enter a title:'}
                                                    value={title}
                                                    onInput={(e) => {
                                                        e.preventDefault()
                                                        setTitle(e.target.value)
                                                    }}
                                                />
                                                <TextBox
                                                    name={'body'}
                                                    formhook={register("body", {required: true})}
                                                    label={'Body *'}
                                                    placeholder={'...'}
                                                    value={body}
                                                    onInput={(e) => {
                                                        e.preventDefault()
                                                        setBody(e.target.value)
                                                    }}
                                                />
                                            </div>
                                            <div className={'flex justify-end cursor-pointer'}>
                                                <button onClick={() => onSubmit()} className={'bg-[#D9551C] rounded-xl shadow-lg px-6 py-2 cursor-pointer text-xl font-neueBold hover:bg-white hover:text-[#D9551C] transition ease-in-out duration-300'}>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                :
                                <div id={'contactDetails1'} className={'absolute top-0 space-y-10 grid items-center hidden animate-slideLeft transition ease-in-out duration-300'}>
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
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}