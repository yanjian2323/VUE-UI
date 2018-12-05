<template>
    <button class="y-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <y-icon class="icon" v-if="icon && !loading" :icon="icon"></y-icon>
        <y-icon class="loading icon" v-if="loading" icon="loading"></y-icon>
        <span class="text">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    import yIcon from './icon';

    export default {
        props: {
            icon: {
                type: String
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (val) {
                    return val === 'left' || val === 'right';
                }
            },
            loading: {
                type: Boolean
            }
        },
        components: {
            yIcon
        }
    }
</script>
<style lang="scss" scoped>
    .y-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        vertical-align: middle;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        &.icon-left {
            .icon {
                order: 1;
            }

            .text {
                order: 2;
            }
        }

        &.icon-right {
            .icon {
                order: 2;
            }

            .text {
                order: 1;
            }
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>