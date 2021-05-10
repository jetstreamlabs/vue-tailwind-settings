import TToggle from 'vue-tailwind/dist/t-toggle'

export default {
    component: TToggle,
    props: {
        fixedClasses: {
            wrapper: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
            wrapperChecked: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200  border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
            wrapperDisabled: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed',
            wrapperCheckedDisabled: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
            button: 'inline-block absolute transform translate-x-0 transition ease-in-out duration-200',
            buttonChecked: 'inline-block absolute transform translate-x-full transition ease-in-out duration-200',
            checkedPlaceholder: 'inline-block',
            uncheckedPlaceholder: 'inline-block'
        },
        classes: {
            wrapper: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
            wrapperChecked: 'bg-blue-500 rounded-full',
            wrapperDisabled: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
            wrapperCheckedDisabled: 'bg-blue-500',
            button: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-gray-400 text-xs',
            buttonChecked: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-blue-500 text-xs',
            checkedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
            uncheckedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs'
        },
        variants: {
            danger: {
                wrapperChecked: 'bg-red-500 rounded-full',
                wrapperCheckedDisabled: 'bg-red-500 rounded-full'
            },
            success: {
                wrapperChecked: 'bg-green-500 rounded-full',
                wrapperCheckedDisabled: 'bg-green-500 rounded-full'
            },
            box: {
                wrapper: 'bg-gray-100 rounded-sm border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
                wrapperChecked: 'bg-blue-500 rounded-sm',
                wrapperCheckedDisabled: 'bg-blue-500 rounded-sm',
                button: 'h-6 w-6 rounded-sm bg-white shadow flex items-center justify-center text-gray-400 text-xs',
                buttonChecked: 'h-6 w-6 rounded-sm  bg-white shadow flex items-center justify-center text-blue-500 text-xs',
                checkedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs',
                uncheckedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs'
            }
        }
    }
}
