<script>
    import { Map, Marker } from "@beyonk/svelte-mapbox";
    let mapComponent;

    function onReady() {
        mapComponent.setCenter([12.550343, 55.665957]);
    }
</script>


<div class="h-35h rounded-15">
    <Map
        accessToken="pk.eyJ1Ijoic2xpZGVhIiwiYSI6ImNrb3EybTA1ejA5Y2Iyc25sazBhanM3aXIifQ.4VkwdxqmiCrZCjJb9RgpYQ"
        style="mapbox://styles/mapbox/light-v10"
        bind:this={mapComponent}
        on:ready={onReady}
        class="rounded-15"
        id="map"
    >
        <Marker lat={55.70651} lng={12.554729} color="rgb(0,0,0)" label="Jane's location" />
    </Map>
</div>

<style>
    :global(.mapboxgl-map) {
       border-radius: 15px;
    }
</style>