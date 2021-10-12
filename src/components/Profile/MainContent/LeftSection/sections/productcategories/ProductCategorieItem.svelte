<script>
    export let iconName;
    export let categoryName;
    export let tradeCount;
</script>


<div class="w-33% flex py-1">
    <div class=" w-3w h-3w bg-white rounded-8 flex justify-center items-center text-username text-black" style="border: 2px solid black;">
        <ion-icon name="{iconName}"></ion-icon>
    </div>

    <div class="flex flex-col ml-.8 h-3w justify-center">
        <p class=" font-medium">{categoryName}</p>
        <p class=" font-medium " style="font-size: .85rem; color: #76799;">{tradeCount} Trades</p>
    </div>
</div>