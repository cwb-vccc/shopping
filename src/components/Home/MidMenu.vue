<template>
<div>
    <Menu mode="horizontal" :theme="theme1">
        <Submenu style="width:20%" name="0">
            <template slot="title">
                全部分类
            </template>
            <MenuItem name="2-1">zero.one</MenuItem>
            <MenuItem name="2-2">build</MenuItem>
            <MenuItem name="2-3">saber</MenuItem>
            <MenuItem name="2-4">z.i.o</MenuItem>
            <MenuItem name="2-5">真骨雕</MenuItem>
        </Submenu>
        <MenuItem style="width:20%" name="1">
            首推
        </MenuItem>
        <MenuItem style="width:20%" name="2">
            最新
        </MenuItem>
        <MenuItem style="width:20%" name="3">
            热卖
        </MenuItem>
        <MenuItem style="width:20%" name="4">
            优惠
        </MenuItem>
    </Menu>
</div>
</template>
<script>
export default {
    name: 'midmenu',
    data () {
        return {
            theme1: 'light'
        }
    }
}
</script>
