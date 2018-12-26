<template>
    <div class="popover" ref="popover">
        <div class="pop-content" :class="[positionCls]" v-if="visible" ref="popContent">
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
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].includes(value)
                }
            }
        },
        computed: {
            positionCls() {
                return `pop-position-${this.position}`
            }
        },
        methods: {
            setPopContentPosition() {
                const {position} = this
                const popContent = this.$refs.popContent
                const scrollX = window.scrollX
                const scrollY = window.scrollY

                document.body.appendChild(popContent)

                const {height: popContentHeight} = this.$refs.popContent.getBoundingClientRect()
                const {left, top, width, height} = this.$refs.text.getBoundingClientRect()
                if (position === 'top') {
                    popContent.style.left = `${left + scrollX}px`
                    popContent.style.top = `${top + scrollY}px`
                } else if (position === 'bottom') {
                    popContent.style.left = `${left + scrollX}px`
                    popContent.style.top = `${top + height + scrollY}px`
                } else if (position === 'left') {
                    popContent.style.left = `${left + scrollX}px`
                    popContent.style.top = `${top + (height - popContentHeight) / 2 + scrollY}px`
                } else {
                    popContent.style.left = `${left + width + scrollX}px`
                    console.log(height);
                    console.log(popContentHeight);
                    popContent.style.top = `${top + (height - popContentHeight) / 2 + scrollY}px`
                }
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
        position: absolute;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;

        &::before,
        &::after {
            content: '';
            position: absolute;
            border: 10px solid transparent;
        }

        &.pop-position-top {
            margin-top: -10px;
            transform: translateY(-100%);

            &::before {
                left: 10px;
                top: 100%;
                border-top-color: #000;
            }

            &::after {
                left: 10px;
                top: calc(100% - 1px);
                border-top-color: #fff;
            }
        }

        &.pop-position-bottom {
            margin-top: 10px;

            &::before {
                left: 10px;
                bottom: 100%;
                border-bottom-color: #000;
            }

            &::after {
                left: 10px;
                bottom: calc(100% - 1px);
                border-bottom-color: #fff;
            }
        }

        &.pop-position-left {
            margin-left: -10px;
            transform: translateX(-100%);

            &::before {
                left: 100%;
                top: 50%;
                transform: translateY(-50%);
                border-left-color: #000;
            }

            &::after {
                left: calc(100% - 1px);
                top: 50%;
                transform: translateY(-50%);
                border-left-color: #fff;
            }
        }

        &.pop-position-right {
            margin-left: 10px;
            &::before{
                right: 100%;
                top: 10px;
                border-right-color: #000;
            }
            &::after{
                right: calc(100% - 1px);
                top: 10px;
                border-right-color: #fff;
            }
        }
    }
</style>