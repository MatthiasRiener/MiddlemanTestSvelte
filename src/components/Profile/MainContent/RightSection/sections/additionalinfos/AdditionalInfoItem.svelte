<script>
    export let iconName;
    export let itemTitle;
    export let itemContent;
</script>

<div class="flex items-center mb-1w">
    <ion-icon name="{iconName}" class="text-black text-icon"></ion-icon>

    <div class="flex flex-col ml-1w">
        <p class="font-semibold uppercase text-section" style="color: #ff6e71">{itemTitle}</p>
        <p class="text-black">{itemContent}</p>
    </div>
</div>