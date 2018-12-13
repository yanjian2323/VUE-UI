<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "YTab",
        props: {
            selected: {
                type: String
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            const {eventBus} = this
            return {
                eventBus,
            }
        },
        mounted() {
            const {eventBus, selected } = this
            this.$children.forEach((nav) => {
                if (nav.$options.name !== 'YTabNav') return;
                nav.$children.forEach((vm) => {
                    if (vm.name === selected) {
                        eventBus.$emit('updated:tab', selected, vm)
                    }
                })
            })
            eventBus.$on('updated:tab', (name) => {
               this.$emit('update:selected', name)
            })
        }
    }
</script>

<style scoped lang="scss">
    .tab {
    }
</style>