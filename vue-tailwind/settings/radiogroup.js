import TRadioGroup from 'vue-tailwind/dist/t-radio-group'

export default {
    component: TRadioGroup,
    props: {
        classes: {
            groupWrapper: 'flex flex-col',
            label: 'ml-2 text-gray-700 uppercase text-sm',
            input: 'text-blue-500 transition duration-100 ease-in-out border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed'
        },
        variants: {
            danger: {
                groupWrapper: 'flex flex-col',
                label: 'ml-2 text-red-500 uppercase text-sm',
                input: 'text-red-500 transition duration-100 ease-in-out border-red-500 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed'
            },
            buttons: {
                groupWrapper: 'flex',
                label: '',
                labelChecked: '',
                wrapper: 'mx-1 bg-white border border-gray-300 flex items-center px-4 py-2 rounded shadow-sm cursor-pointer focus:shadow-outline text-sm text-gray-700 hover:text-gray-500 leading-5 uppercase',
                wrapperChecked: 'mx-1 bg-gray-100 border border-gray-300 flex items-center px-4 py-2 rounded shadow-inner cursor-pointer focus:shadow-outline text-sm text-gray-700 hover:text-gray-500 leading-5 uppercase',
                inputWrapper: '',
                inputWrapperChecked: '',
                input: 'absolute invisible'
            }
        }
    }
}
