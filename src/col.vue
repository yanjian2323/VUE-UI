<template>
    <div class="col"
         :class="colClass"
         :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    function validator(value) {
        let isPass = true;
        const keys = Object.keys(value)
        keys.forEach((key) => {
            if (!['span', 'offset'].includes(key)) {
                isPass = false;
            }
        })

        return isPass
    }

    function createColClasses(obj, device) {
        const cls = []
        if (obj) {
            obj.span && cls.push(`col-${device}${obj.span}`)
            obj.offset && cls.push(`offset-${device}${obj.offset}`)
        }

        return cls
    }

    export default {
        props: {
            span: {
                type: [String, Number]
            },
            offset: {
                type: [String, Number]
            },
            ipad: {
                type: Object,
                validator,
            },
            narrowPc: {
                type: Object,
                validator,
            },
            pc: {
                type: Object,
                validator,
            },
            widePc: {
                type: Object,
                validator,
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colClass() {
                let cls = [];
                const {span, offset, ipad, narrowPc, pc, widePc} = this;
                cls.push(createColClasses({span, offset}, ''))
                cls.push(createColClasses(ipad, 'ipad-'))
                cls.push(createColClasses(narrowPc, 'narrow-pc-'))
                cls.push(createColClasses(pc, 'pc-'))
                cls.push(createColClasses(widePc, 'wide-pc-'))

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
    .col {
        /*flex-shrink: 0;*/
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
        @media (min-width: 568px) {
            $class-prefix: col-ipad-;
            $offset-prefix: offset-ipad-;
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
        @media (min-width: 768px) {
            $class-prefix: col-narrow-pc-;
            $offset-prefix: offset-narrow-pc-;
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
        @media (min-width: 992px) {
            $class-prefix: col-pc-;
            $offset-prefix: offset-pc-;
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
        @media (min-width: 1200px) {
            $class-prefix: col-wide-pc-;
            $offset-prefix: offset-wide-pc-;
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
    }

</style>