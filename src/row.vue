<template>
    <div class="row" :class="[rowClass]" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            gutter: {
                type: [String, Number]
            },
            align: {
                type: String,
                default: 'left',
                validator (val) {
                    return ['left', 'center', 'right'].includes(val)
                }
            }
        },
        mounted () {
            this.$children.forEach(vm => vm.gutter = this.gutter)
        },
        computed: {
            rowStyle () {
                const { gutter } = this;
                return {
                    marginLeft: `-${gutter/2}px`,
                    marginRight: `-${gutter/2}px`,
                }
            },
            rowClass () {
                return `align-${this.align}`
            }
        }
    }
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
        flex-wrap: wrap;
        &.align-left {
            justify-content: flex-start;
        }
        &.align-center {
            justify-content: center;
        }
        &.align-right {
            justify-content: flex-end;
        }
    }
</style>