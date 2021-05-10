import TTag from 'vue-tailwind/dist/t-tag'

export default {
    component: TTag,
    props: {
        fixedClasses: '',
        classes: '',
        variants: {
            title: 'text-2xl leading-8 font-extrabold text-gray-900 tracking-tight',
            subtitle: 'text-lg leading-6 font-medium text-gray-900',
            error: 'text-red-500',
            badge: 'inline-flex items-center px-3 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800',
            avatar: 'inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 overflow-hidden leading-none text-center'
        }
    }
}
