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
                validator (val) {
                    return ['left', 'center', 'right'].includes(val)
                }
            }
        },
        data () {
            return {
                rowClass: `align-${this.align}`
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
            }
        }
    }
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
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