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
                onDocumentClick: null,
            }
        },
        methods: {
            setPopContentPosition() {
                const popContent = this.$refs.popContent
                const scrollX = window.scrollX
                const scrollY = window.scrollY
                const {left, top, height} = this.$refs.text.getBoundingClientRect()
                popContent.style.left = `${left + scrollX}px`
                popContent.style.top = `${top + scrollY - height}px`
                document.body.appendChild(popContent)
            },
            removeDocumentEvent() {
                document.removeEventListener('click', this.onDocumentClick)
            },
            addDocumentEvent(e) {
                const targetEle = e.target
                // 如果点击了弹出的pop什么都不做
                if (this.$refs.popContent.contains(targetEle)) {
                    return
                }
                this.removeDocumentEvent()
                this.visible = false;
                console.log('触发document的click');
            },
            onTrigger() {
                this.visible = !this.visible;
                this.onDocumentClick = this.addDocumentEvent
                if (this.visible) {
                    this.$nextTick(() => {
                        this.setPopContentPosition()
                        document.addEventListener('click', this.onDocumentClick)
                    })
                } else {
                    this.removeDocumentEvent()
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