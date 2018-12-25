<template>
    <div class="popover" >
        <div class="pop-content" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <div class="text" @click="show">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YPopover",
        data() {
            return {
                visible: false,
                clickFn: null,
            }
        },
        methods: {
            show() {
                this.visible = !this.visible;

                if (this.visible) {
                    this.clickFn = () => {
                        console.log('document的click触发');
                        this.visible = false;
                        document.removeEventListener('click', this.clickFn)
                    }
                    this.$nextTick(() => {
                        document.addEventListener('click', this.clickFn)
                    })
                } else {
                    document.removeEventListener('click', this.clickFn)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        position: relative;

        .pop-content {
            border: 1px solid red;
            position: absolute;
            bottom: 100%;
        }
    }
</style>