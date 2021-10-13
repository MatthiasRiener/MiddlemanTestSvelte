<script>
    export let stars;
    export let reviewTitle;
    export let reviewer;
    export let timeAgo;

    var isInteger = isInt(stars);

    function isInt(n) {
        return n % 1 === 0;
    }
</script>

<div class="box-border py-1 " style="border-top: 2px solid #dadada71;">
    <div class="flex items-center my-.8">
        <div>
            {#each Array(parseInt(stars)) as _, i}
                <ion-icon name="star" />
            {/each}
            {#if !isInteger}
                <ion-icon name="star-half" />
            {/if}
            {#each Array(parseInt(5 - stars)) as _, i}
                <ion-icon name="star-outline" />
            {/each}
        </div>

        <p class="font-medium text-tb ml-1w">{reviewTitle}</p>
    </div>

    <div class=" flex items-center my-.8">
        <div class="bg-center bg-cover w-2w h-2w rounded-auto reviewer-profile-picture" />
        <p class="mx-.5w font-medium text-section" >{reviewer}</p>
        <p class="mx-.5w ml-auto font-medium text-timeAgo" style="color: #bbbdcb">{timeAgo} months ago</p>
    </div>

    <div class="px-1.5w ml-1w " style="border-left: 2px solid #c2c2c271;">
        <p class="text-section">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            eveniet doloremque eos quam sapiente ipsum, quibusdam alias libero,
            est quas excepturi placeat molestiae odio minus blanditiis
            repellendus tenetur reiciendis exercitationem.
        </p>
    </div>
    <p class="font-medium underline mt-.5w cursor-pointer" style="color: #ff6e71">Answer this review</p>
</div>

<style>
    .reviewer-profile-picture {
        background-image: url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80");
    }
</style>