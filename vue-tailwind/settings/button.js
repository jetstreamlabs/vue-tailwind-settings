import TButton from 'vue-tailwind/dist/t-button'

export default {
    component: TButton,
    props: {
        fixedClasses: 'block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
        classes: 'text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600',
        variants: {
            secondary: 'text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600',
            error: 'text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600',
            success: 'text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600',
            link: 'text-blue-500 underline hover:text-blue-600'
        }
    }
}
