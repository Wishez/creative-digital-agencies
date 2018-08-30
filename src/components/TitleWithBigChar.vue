<template>
    <h1 :class="{
        'withBigChar text_upper': true,
        [`color_${color}`]: true,
    }"
        :data-char="char"
    >
        <slot/>
    </h1>
</template>

<script>
export default {
    name: "TitleWithBigChar",
    components: {},
    filters: {},
    data: () => ({}),
    props: {
        color: {
            type: String,
            required: false,
            default: "darkGray",
        },
        char: {
            type: String,
            required: true,
            validate(char) {
                return char.length === 1
            }
        }
    },
    delimiters: [],
    computed: {},
    methods: {},
    fetch() {},
    beforeMount() {},
    mounted() {},
    beforeCreate() {},
    created() {},
    beforeUpdated() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {}
}
</script>

<style lang="sass" scoped>
</style>