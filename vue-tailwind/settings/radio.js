import TRadio from 'vue-tailwind/dist/t-radio'

export default {
    component: TRadio,
    props: {
        fixedClasses: 'transition duration-100 ease-in-out shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 disabled:cursor-not-allowed',
        classes: 'text-blue-500 border-gray-300',
        variants: {
            error: 'text-red-500 border-red-300',
            success: 'text-green-500 border-green-300'
        }
    }
}
