import TSelect from 'vue-tailwind/dist/t-select'

export default {
    component: TSelect,
    props: {
        fixedClasses: 'block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
        classes: 'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
        variants: {
            danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
            success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
        }
    }
}
