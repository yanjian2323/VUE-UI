<template>
    <div class="toast-box" :class="[positionCls]">
        <div class="toast">
            <div v-if="enableHtml" class="message" v-html="$slots.default[0]">
            </div>
            <div v-else class="message">
                <slot></slot>
            </div>
            <div class="line"></div>
            <div class="button" @click="onCloseClick">{{closeButton.buttonText}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YToast",
        props: {
            autoClose: {
                type: Boolean,
                default: true,
            },
            autoCloseDelay: {
                type: Number,
                default: 3,
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        buttonText: '关闭',
                        closeCallback: null,
                    }
                }
            },
            position: {
                type: String,
                default: 'top',
                validator(val) {
                    return ['top', 'middle', 'bottom'].includes(val)
                }
            },
            enableHtml: {
                type: Boolean,
                default: false,
            }
        },
        computed: {
            positionCls() {
                return `toast-${this.position}`
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            onCloseClick() {
                if (this.closeButton.closeCallback) {
                    this.closeButton.closeCallback()
                }
                this.close()
            }
        }
    }
</script>

<style scoped lang="scss">
    $toast-bg-color: rgba(0, 0, 0, 0.74);
    $toast-shadow-color: rgba(0, 0, 0, 0.50);
    $font-size: 14px;
    $line-color: #666;
    $animation-duration: 500ms;
    $border-radius: 4px;
    .toast-box {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.toast-top {
            top: 0;
            .toast{
                animation: slide-up $animation-duration;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }
        &.toast-middle {
            top: 50%;
            transform: translate(-50%,-50%);
            .toast{
                animation: fade-in $animation-duration;
            }
        }

        &.toast-bottom {
            bottom: 0;
            .toast{
                animation: slide-down $animation-duration;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }

    .toast {
        font-size: $font-size;
        color: #fff;
        background: $toast-bg-color;
        border-radius: $border-radius;
        box-shadow: 0px 0px 3px 0px $toast-shadow-color;
        display: flex;
        padding: 0 16px;


        .message {
            padding: 8px 0;
        }

        .line {
            border-left: 1px solid $line-color;
            margin-left: 16px;
            margin-right: 16px;
        }

        .button {
            display: flex;
            align-items: center;
        }
    }

    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>