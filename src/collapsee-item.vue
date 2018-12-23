<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="visible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YCollapseItem",
        inject: ['eventBus'],
        props: {
            title: {
                type: String
            },
            name: {
                type: String
            }
        },
        data() {
            return {
                visible: false
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (name) => {
                if (this.name !== name) {
                    this.visible = false
                } else {
                    this.visible = true
                }
            })
        },
        methods: {
            toggle() {
                const {visible, eventBus, name} = this
                if (!visible) {
                    eventBus.$emit('update:selected', name)
                } else {
                    this.visible = false
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $collapse-border-color: rgba(153, 153, 153, 1);
    $collapse-item-border-radius: 4px;
    .collapse-item {
        > .title {
            padding: 4px 8px;
            border: 1px solid $collapse-border-color;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
        }

        > .content {
            padding: 4px 8px;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $collapse-item-border-radius;
                border-top-right-radius: $collapse-item-border-radius;
            }
        }
    }
</style>