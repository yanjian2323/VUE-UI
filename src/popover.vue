<template>
    <div class="popover" ref="popover">
        <div class="pop-content" v-if="visible" ref="popContent">
            <slot name="content"></slot>
        </div>
        <div class="text" @click="onTrigger" ref="text">
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
            }
        },
        methods: {
            setPopContentPosition() {
                const popContent = this.$refs.popContent
                const scrollX = window.scrollX
                const scrollY = window.scrollY
                const {left, top, height} = this.$refs.text.getBoundingClientRect()
                popContent.style.left = `${left + scrollX}px`
                popContent.style.top = `${top + scrollY}px`
                document.body.appendChild(popContent)
            },
            onClickDocument(e) {
                const targetEle = e.target
                // 如果点击了弹出的pop什么都不做
                if (this.$refs.popContent.contains(targetEle)) {
                    return
                }
                this.close()
                console.log('触发document的click');
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.setPopContentPosition()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            onTrigger() {
                if (this.visible) {
                    this.close()
                } else {
                    this.open()
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $pop-border-color: #333;
    $pop-border-radius: 4px;
    .popover {
        display: inline-block;
    }

    .pop-content {
        border: 1px solid $pop-border-color;
        border-radius: $pop-border-radius;
        transform: translateY(-100%);
        position: absolute;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        margin-top: -10px;
        &::before,
        &::after{
            content: '';
            position: absolute;
            left: 10px;
            border: 10px solid transparent;
        }
        &::before{
            top: 100%;
            border-top-color: #000;
        }
        &::after{
            top: calc(100% - 1px);
            border-top-color: #fff;
        }
    }
</style>