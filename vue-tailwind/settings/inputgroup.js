import TInputGroup from 'vue-tailwind/dist/t-input-group'

export default {
    component: TInputGroup,
    props: {
        fixedClasses: {
            wrapper: '',
            label: 'block',
            body: '',
            feedback: ' text-sm text-sm',
            description: 'text-gray-400 text-sm'
        },
        classes: {
            wrapper: '',
            label: '',
            body: '',
            feedback: 'text-gray-400',
            description: 'text-gray-400'
        },
        variants: {
            danger: {
                label: 'text-red-500',
                feedback: 'text-red-500'
            },
            success: {
                label: 'text-green-500',
                feedback: 'text-green-500'
            }
        }
    }
}
