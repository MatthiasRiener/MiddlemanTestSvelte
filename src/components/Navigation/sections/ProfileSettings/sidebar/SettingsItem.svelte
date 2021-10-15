<script>
    export let itemID;
    export let isActive;
    export let itemTitle;
    export let isLogout;
</script>

<div
    class="  cursor-pointer pl-0.2w pr-0.6w py-0.4 box-border rounded-8 overflow-hidden whitespace-nowrap sidebar-settings-item {isActive
        ? 'active-settings-item'
        : ''}"
    id="sidebar-item-my-{itemID}"
>
    <p style="color: {isLogout ? 'red' : 'black'}">{itemTitle}</p>
</div>


<style>
    .sidebar-settings-item:hover {
        text-shadow: 0 0 .65px #333, 0 0 .65px #333;
        background: rgb(235, 235, 235);
    }
</style>