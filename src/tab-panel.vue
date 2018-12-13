<template>
   <div class="tab-panel" v-if="active">
       <slot></slot>
   </div>
</template>

<script>
    export default {
        name: "YTabPanel",
        inject: ['eventBus'],
        props: {
            name: {
                type: String
            }
        },
        data () {
            return {
                active: false
            }
        },
        mounted() {
            const { name, eventBus } = this
            // 注册tab改变时调用的函数
            eventBus.$on('updated:tab', (tabItemName) => {
                if (tabItemName === name) {
                    this.active = true
                } else {
                    this.active = false
                }
            })
        }
    }
</script>

<style scoped lang="scss">

</style>