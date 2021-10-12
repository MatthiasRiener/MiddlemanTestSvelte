<script>
    export let iconName;
    export let last;
</script>

<div
    class="p-0.4r flex justify-center items-center rounded-8 text-icon mr-.8 cursor-pointer"
    style="border: 2px solid #dadada71; margin-left: {last ? 'auto' : ''}"
>
    <ion-icon name={iconName} />
</div>
