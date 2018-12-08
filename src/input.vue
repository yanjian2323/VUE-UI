<template>
    <div class="input-wrapper" :class="{error}">
        <input type="text"
               :value="value"
               :disabled="disabled"
               :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
               @focus="$emit('focus', $event.target.value)" />
        <template v-if="error">
            <y-icon class="icon-error" icon="error"></y-icon>
            <span class="error-msg">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        components: {
          'y-icon': Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-color-disabled: #bbb;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .input-wrapper {
        display: inline-flex;
        align-items: center;
        > :not(:last-child){
            margin-right: 0.5em;
        }
        > input {
            height: $height;
            border: 1px solid $border-color-hover;
            border-radius: $border-radius;
            font-size: $font-size;
            padding: 0 8px;
            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled],
            &[readonly]{
                border-color: $border-color-disabled;
                cursor: not-allowed;
            }
        }
        &.error {
            > input{
                border-color: $red;
            }
            .icon-error{
                fill: $red;
            }
            .error-msg{
                color: $red;
            }
        }
    }
</style>