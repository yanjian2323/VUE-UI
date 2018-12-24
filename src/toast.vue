<template>
    <div class="toast">
        <div class="message">
            <slot></slot>
        </div>
        <div class="line"></div>
        <div class="button" @click="onCloseClick">{{closeButton.buttonText}}</div>
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
    .toast {
        font-size: $font-size;
        color: #fff;
        background: $toast-bg-color;
        box-shadow: 0px 0px 3px 0px $toast-shadow-color;
        display: flex;
        position: fixed;
        padding: 0 16px;
        left: 50%;
        transform: translateX(-50%);

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
</style>