//const Text = ({name, label, type, placeholder, onChange, children}, props) => {
import {useRef} from "react";

const TextInput = (props) => {;
    const twStyles = [
        'w-full',
        'px-4 py-2',
        'appearance-none',
        ' focus:outline dark:focus:outline-white outline-none transition duration-200 ease-in-out hover:border-[#D9551C] focus:border-[#D9551C] placeholder-zinc-500',
        'min-w-0',
        'text-xs',
        'block',
        'bg-transparent border-b-2 dark:nm-inset-gray-800 dark:text-white',
        'text-zinc-300 text-3xl',
        'no-autofill-bkg'
    ]
    return (
        <div className="text-gray-900 w-full text-left">
            <label className="font-default text-zinc-300 text-xl text-left">{props.label}</label>
            <input {...props.formhook} {...props} className={twStyles.join(' ')} />
        </div>
    )
}

export default TextInput;