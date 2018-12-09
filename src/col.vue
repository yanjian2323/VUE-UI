<template>
    <div class="col"
         :class="colClass"
         :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            span: {
                type: [String, Number]
            },
            offset: {
                type: [String, Number]
            }
        },
        data () {
            return {
                gutter: 0
            }
        },
        computed: {
            colClass () {
                let cls = [];
                const { span, offset } = this;
                this.span && cls.push(`col-${span}`);
                this.offset && cls.push(`offset-${offset}`);

                return cls;
            },
            colStyle() {
                return {
                    paddingLeft: `${this.gutter / 2}px`,
                    paddingRight: `${this.gutter / 2}px`,
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $class-prefix: col-;
    $offset-prefix: offset-;
    $cols: 24;
    .col{
        display: inline-flex;
        width: 50%;
        height: 30px;

        @for $n from 1 through $cols {
            &.#{$class-prefix}#{$n} {
                width: ($n / $cols) * 100%;
            }
        }
        @for $n from 1 through $cols {
            &.#{$offset-prefix}#{$n} {
                margin-left: ($n / $cols) * 100%;
            }
        }
    }

</style>