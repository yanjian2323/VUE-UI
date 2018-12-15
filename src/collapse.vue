<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YCollapse"
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