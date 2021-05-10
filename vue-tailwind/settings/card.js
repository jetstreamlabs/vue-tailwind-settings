import TCard from 'vue-tailwind/dist/t-card'

export default {
    component: TCard,
    props: {
        fixedClasses: {
            wrapper: 'border rounded shadow-sm ',
            body: 'p-3',
            header: 'border-b p-3 rounded-t',
            footer: 'border-t p-3 rounded-b'
        },
        classes: {
            wrapper: 'bg-white border-gray-100',
            body: '',
            header: 'border-gray-100',
            footer: 'border-gray-100'
        },
        variants: {
            danger: {
            wrapper: 'bg-red-50 text-red-700 border-red-200',
            header: 'border-red-200 text-red-700',
            footer: 'border-red-200 text-red-700'
            }
        }
    }
}
