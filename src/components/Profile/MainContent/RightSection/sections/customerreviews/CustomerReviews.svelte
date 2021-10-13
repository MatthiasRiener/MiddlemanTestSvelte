<script>
    import ProgressBarItem from "./ProgressBarItem.svelte";
</script>

<div class="box-border p-1 mb-2 rounded-15" style="border: 2px solid #dadada49;">
    <div class="flex mb-2">
        <p class="text-icon">Customer reviews</p>
    </div>

    <div class="flex items-end ">
        <p class="font-bold mr-.5w" style="font-size: 2.4rem;">4,7</p>
        <ion-icon name="star" class="ratings-basic-icon"></ion-icon>
        <ion-icon name="star" class="ratings-basic-icon"></ion-icon>
        <ion-icon name="star" class="ratings-basic-icon"></ion-icon>
        <ion-icon name="star" class="ratings-basic-icon"></ion-icon>
        <ion-icon name="star-half" class="ratings-basic-icon"></ion-icon>
    </div>

    <div class="ratings-progress-bar-section">
        <ProgressBarItem barRating="1" progress="55" bgColor="#76db9a"/>
        <ProgressBarItem barRating="2" progress="16" bgColor="#b7ea83"/>
        <ProgressBarItem barRating="3" progress="12" bgColor="#f6d757"/>
        <ProgressBarItem barRating="4" progress="8" bgColor="#fab850"/>
        <ProgressBarItem barRating="5" progress="9" bgColor="#f17a55"/>

    </div>

</div>





<style>
    .ratings-basic-icon {
        padding: 0.2vw 0vw;
        transform: translateY(-40%);
        font-size: 1.2rem;
    }
</style>