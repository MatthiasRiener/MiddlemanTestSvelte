<script>
	import NavigationItem from '../navigation/NavigationItem.svelte';
    import NavigationProfilePicture from '../navigation/NavigationProfilePicture.svelte';
</script>

<nav class="h-8 flex items-center z-50 bg-white w-full">
	<div class="top-bar-logo bg-tblogo bg-center bg-cover mr-.8" />

	<NavigationItem title="Posts" />
	<NavigationItem title="Events" />
	<NavigationItem title="Settings" />
	<NavigationItem title="Resources" />
	<NavigationItem title="People" />

	<div class="flex items-center" style="margin-left: auto !important;">
		<ion-icon name="search-outline" class="top-bar-icon" />
		<ion-icon name="people-outline" class="top-bar-icon" />
		<div class="h-100 flex items-center relative">
			<ion-icon name="notifications-outline" class="top-bar-icon " />
			<div class="notification-top-bar-new rounded-auto absolute" />
		</div>

        <div class="flex items-center bg-black rounded-8 p-0.4 mx-2">
            <p style="font-size: 0.9rem" class="text-white">Become Middleman</p>
        </div>
	</div>


    <NavigationProfilePicture />



</nav>

<style lang="postcss">
	.top-bar-logo {
		width: 1.8vw;
		height: 1.8vw;
		transform: translateY(-10%);
	}

	.top-bar-icon {
		margin: 0 0.6vw;
		font-weight: bold;
		font-size: 1.3rem;
		cursor: pointer;
		color: black;
	}

	.notification-top-bar-new {
		width: 10px;
		height: 10px;
		background: #ff6e71;
		transform: translate(1.2rem, -0.4rem);
	}
</style>
