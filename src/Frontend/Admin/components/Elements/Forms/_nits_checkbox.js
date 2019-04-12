export default {
    name: "nits-checkbox",
    data() {
        return {
            checkbox: []
        }
    },
    props: {
        label: String,
        options: Array,
        value: Array,
        type: String
    },
    methods: {
        checkedCheck(value) {
            return this.checkbox.includes(value)
        }
    },
    created() {
        this.checkbox = this.value
    },
    render (createElement) {
        return createElement('div', { class: 'm-form__group form-group'}, [
            createElement('label', this.label),
            createElement('div', { class: 'm-'+this.type+'-list' },
                this.options.map(a => createElement('label', { class: 'm-'+this.type }, [
                    createElement('input', {
                        attrs: { type: this.type, value: a.value, checked: this.checkedCheck(a.value) },
                        on: {
                            input: (event) => {
                                var index = this.checkbox.indexOf(event.target.value);
                                if (index > -1) {
                                    this.checkbox.splice(index, 1);
                                }
                                else
                                    this.checkbox.push(event.target.value)
                                this.$emit('input', this.checkbox)
                            }
                        }
                    }), a.label, createElement('span')
                ])))
        ])
    }
}