<script>
    export let barRating, progress, bgColor;
</script>

<div class="flex items-center mt-1h">
    <p class="font-medium text-right w-1w" style="font-size: .9rem; color: #b4b5c5;">{barRating}</p>
    <div class="progressbar rounded-3 mx-.5w" style="padding: 2px; background-color: #f3f2f9; min-width: 60%;">
        <div style="width: {progress}%; background-color: {bgColor}" class="h-10p rounded-3" />
    </div>
    <p class="font-semibold  mx-.5w" style="font-size: .9rem; color: #3b3e62;">{progress}%</p>
</div>
