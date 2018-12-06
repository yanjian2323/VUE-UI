<template>
    <div class="y-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        mounted() {
            Array.from(this.$el.children).forEach((node) => {
                if (node.tagName.toLowerCase() !== 'button') {
                    console.log(node.tagName)
                    console.warn(`button-group的子节点必须是button,而你传入的是${node.tagName.toLowerCase()}`)
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .y-button-group {
        display: inline-flex;
        > .y-button {
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>