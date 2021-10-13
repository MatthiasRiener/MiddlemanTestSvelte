<script>
    import ReviewItem from "./ReviewItem.svelte";
</script>


<div class="box-border flex flex-col p-1 rounded-10 mb-1w text-section" style="border: 2px solid #dadada71;">
    <div class="flex items-center mb-1w">
        <p class="font-medium; text-sectionTitle">Reviews</p>
    </div>

    <ReviewItem stars="3.5" reviewTitle="Very fast middleman! Faster than expected." reviewer="Jane Doe" timeAgo="3"/>
    <ReviewItem stars="5" reviewTitle="Very fast middleman! Faster than expected." reviewer="Jane Doe" timeAgo="2"/>


</div>
