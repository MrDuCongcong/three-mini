<template>
    <div class="app">
        <div class="app-menu">
            <a-menu theme='dark'>
                <a-menu-item>菜单项</a-menu-item>
            </a-menu>
        </div>
        <div class="app-view">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
export default {
    name: 'app',
    data() {
        return {

        };
    },
};
</script>

<style lang="scss">
.app {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100%;
    .app-menu {
        height: 100%;
        width: 150px;
        background: #001529;
        flex-shrink: 0;
    }
    .app-view {
        flex-grow: 1;
    }
}
</style>