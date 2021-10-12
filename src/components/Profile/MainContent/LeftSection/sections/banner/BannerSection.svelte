<script>
    import SocialMediaIcon from "./socialmedia/SocialMediaIcon.svelte";
</script>

<div
    class=" h-35h bg-cover bg-center rounded-t-15 flex flex-col-reverse relative banner-image"
>
    <div
        class="h-10w w-10w bg-cover bg-center rounded-auto bg-white profile-image ml-3w"
    />
</div>

<div
    class=" h-20h bg-white rounded-b-15 box-border flex flex-row-reverse"
    style="border: 2px solid #dadada49;"
>
    <div class="w-35w max-h-full">
        <div class="h-60% flex items-start flex-col justify-center">
            <p class="font-medium text-username">Assaf Rappaport</p>
            <p class="font-medium text-tb">Certified Middleman</p>
        </div>

        <div class="height-40% flex items-center">
            <SocialMediaIcon iconName="logo-twitter" />
            <SocialMediaIcon iconName="logo-facebook" />
            <SocialMediaIcon iconName="logo-instagram" />
            <SocialMediaIcon iconName="logo-tiktok" />
            <SocialMediaIcon iconName="logo-discord" />
            <SocialMediaIcon iconName="bookmark-outline" last="true" />


            
        </div>
    </div>
</div>

<style>
    .banner-image {
        background-image: url("https://wallpaperaccess.com/full/14259.jpg");
    }

    .profile-image {
        background-image: url("https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg");
        transform: translateY(50%);
        border: 5px solid white;
    }
</style>
