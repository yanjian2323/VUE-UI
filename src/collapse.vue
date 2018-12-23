<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "YCollapse",
        props: {
            selected: {
                type: Array,
            },
            single: {
                type: Boolean,
            }
        },
        provide() {
            const {eventBus} = this
            return {
                eventBus,
            }
        },
        data() {
            return {
                eventBus: new Vue(),
                selectedArray: this.selected
            }
        },
        mounted() {
            const { eventBus, single } = this
            let { selectedArray } = this
            eventBus.$on('addItem', (name) => {
                if (single) {
                    selectedArray = []
                }
                selectedArray.push(name)
                eventBus.$emit('update:selected', selectedArray)
                this.$emit('update:selected', selectedArray)
            })
            eventBus.$on('removeItem', (name) => {
                const { selectedArray } = this
                const index = selectedArray.indexOf(name)
                selectedArray.splice(index, 1)
                eventBus.$emit('update:selected', selectedArray)
                this.$emit('update:selected', selectedArray)
            })
            eventBus.$emit('update:selected', selectedArray)
        }
    }
</script>

<style scoped lang="scss">
    $collapse-border-color: rgba(153, 153, 153, 1);
    $collapse-border-radius: 4px;
    .collapse {
        border: 1px solid $collapse-border-color;
        border-radius: $collapse-border-radius;
    }
</style>