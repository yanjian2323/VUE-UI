<template>
    <div class="popover" ref="popover">
        <div class="pop-content" v-if="visible" ref="popContent">
            <slot name="content"></slot>
        </div>
        <div class="text" @click="show" ref="text">
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
        mounted() {

        },
        methods: {
            show() {
                this.visible = !this.visible;

                if (this.visible) {
                    this.clickFn = (e) => {
                        const targetEle = e.target
                        // 如果点击了弹出的pop什么都不做
                        if (this.$refs.popContent.contains(targetEle)) {
                            return
                        }
                        this.visible = false;
                        document.removeEventListener('click', this.clickFn)
                        console.log('触发document的click');
                    }
                    this.$nextTick(() => {
                        const popContent = this.$refs.popContent
                        const scrollX = window.scrollX
                        const scrollY = window.scrollY
                        const {left, top, height} = this.$refs.text.getBoundingClientRect()
                        popContent.style.left = `${left + scrollX}px`
                        popContent.style.top = `${top + scrollY - height}px`
                        document.body.appendChild(popContent)
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
    }
    .pop-content {
        border: 1px solid red;
        position: absolute;
    }
</style>