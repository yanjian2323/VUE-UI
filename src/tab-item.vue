<template>
    <div class="tab-item" :class="{active}" @click="clickTabItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YTabItem",
        inject: ['eventBus'],
        props: {
            name: {
                type: String
            }
        },
        data() {
            return {
                active: false
            }
        },
        mounted() {
            const {name, eventBus} = this
            // 注册tab改变时调用的函数
            eventBus.$on('updated:tab', (tabItemName) => {
                if (tabItemName === name) {
                    this.active = true
                } else {
                    this.active = false
                }
            })
        },
        methods: {
            clickTabItem() {
                this.active = true
                const { eventBus, name } = this
                // this.$emit('updated:selected', this.name)
                eventBus.$emit('updated:tab', name, this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $tab-active-color: #4A90E2;
    .tab-item {
        padding: 0 1em;
        cursor: pointer;

        &.active {
            color: $tab-active-color;
        }
    }
</style>