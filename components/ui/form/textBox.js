//const Text = ({name, label, type, placeholder, onChange, children}, props) => {
import {useRef} from "react";

const TextBox = (props) => {;
    const twStyles = [
        'w-full',
        'px-4 py-2',
        'appearance-none',
        ' focus:outline dark:focus:outline-white outline-none transition duration-200 ease-in-out hover:border-[#D9551C] focus:border-[#D9551C] placeholder-zinc-500',
        'min-w-0',
        'block',
        'bg-transparent border-b-2 dark:nm-inset-gray-800 dark:text-white',
        'text-zinc-300',
        'no-autofill-bkg h-32'
    ]
    return (
        <div className="text-gray-900 w-full text-left">
            <label className="font-default text-zinc-300 text-left">{props.label}</label>
            <textarea {...props.formhook} {...props} className={twStyles.join(' ')} />
        </div>
    )
}

export default TextBox;