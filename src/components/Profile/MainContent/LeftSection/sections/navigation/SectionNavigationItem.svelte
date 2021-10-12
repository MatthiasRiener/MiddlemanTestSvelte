<script>
    export let title;
    export let isActive;
</script>

<div class="cursor-pointer flex items-center justify-center rounded-10 mr-6p py-0.4 px-1 {isActive ? 'active': ''}">
    <p>
        {title}
    </p>
</div>

<style>
    .active {
        background-color: white;
        font-weight: 500;
        color: black;
    }
</style>