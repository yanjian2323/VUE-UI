<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "YCollapse",
        props: {
            selected: {
                type: String
            }
        },
        provide () {
            const { eventBus } = this
            return {
               eventBus,
            }
        },
        data () {
           return {
               eventBus: new Vue()
           }
        },
        mounted() {
           this.eventBus.$emit('update:selected', this.selected)
        }
    }
</script>

<style scoped lang="scss">
    $collapse-border-color: rgba(153, 153, 153, 1);
    $collapse-border-radius: 4px;
    .collapse {
        border: 1px solid $collapse-border-color;
        border-radius: $collapse-border-radius;
    }
</style>