<script>
	import TopBarProfileInfo from './TopBarProfileInfo.svelte';

	let hovering = false;
	let settingsIsOpened = false;

	function enter() {
		hovering = true;
	}

	function leave() {
		if (settingsIsOpened) return;
		hovering = false;
	}

	const closeOne = () => (settingsIsOpened = !settingsIsOpened);
	
	
</script>

<div class="flex items-center justify-center h-8" on:mouseleave={leave}>
	<div
		id="top-bar-profile-picture"
		class="bg-center bg-cover cursor-pointer rounded-auto "
		on:mouseenter={enter}
	>
		{#if hovering}
			<TopBarProfileInfo closeHandler={closeOne} />
		{/if}
	</div>

	<ion-icon
		name="chevron-down-outline"
		class="top-bar-icon"
		id="expand-profile-info"
		on:mouseenter={enter}
	/>
</div>

<style>
	#top-bar-profile-picture {
		width: 2vw;
		height: 2vw;
		background-image: url('https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg');
		border: 2px solid #000;
	}
	.top-bar-icon {
		margin: 0 0.6vw;
		font-weight: bold;
		font-size: 1.3rem;
		cursor: pointer;
	}
</style>
