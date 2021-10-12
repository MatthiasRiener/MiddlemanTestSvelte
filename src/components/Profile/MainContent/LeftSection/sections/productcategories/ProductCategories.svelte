<script>
    import ProductCategorieItem from "./ProductCategorieItem.svelte";

</script>

<div class="rounded-10 p-1 box-border flex flex-col mb-1w text-section" style="border: 2px solid #dadada71;">
    <div class="flex items-center mb-1w">
        <p class="font-medium; text-sectionTitle">Product Categories</p>
    </div>

    <div class="flex flex-wrap">
        <ProductCategorieItem iconName="american-football" tradeCount="300" categoryName="Sporting Goods" />
        <ProductCategorieItem iconName="camera" tradeCount="300" categoryName="Sporting Goods" />
        <ProductCategorieItem iconName="basket" tradeCount="300" categoryName="Sporting Goods" />
        <ProductCategorieItem iconName="bandage" tradeCount="300" categoryName="Sporting Goods" />
        <ProductCategorieItem iconName="beer" tradeCount="300" categoryName="Sporting Goods" />
    </div>

</div>
