<script>
    import AdditionalInfoItem from "./AdditionalInfoItem.svelte";
</script>

<div class="box-border p-1 mb-2 rounded-15" style="border: 2px solid #dadada49;">
    <div class="flex mb-2">
        <p class="text-icon">Additional Details</p>
    </div>


    <AdditionalInfoItem iconName="calendar" itemTitle="Active since" itemContent="September, 2021" />
    <AdditionalInfoItem iconName="earth" itemTitle="Languages" itemContent="English, German" />
    <AdditionalInfoItem iconName="chatbubbles" itemTitle="Trades done" itemContent="452" />
    <AdditionalInfoItem iconName="map" itemTitle="Location" itemContent="Copenhagen, Denmark" />
    <AdditionalInfoItem iconName="time" itemTitle="Average response time" itemContent="Less than one hour" />

    
</div>