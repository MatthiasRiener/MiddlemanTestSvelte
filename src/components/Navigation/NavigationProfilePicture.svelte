<script>
	import TopBarProfileInfo from './TopBarProfileInfo.svelte';

	let hovering = false;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div class="h-8 flex items-center justify-center" on:mouseleave={leave}>
	<div
		id="top-bar-profile-picture"
		class="rounded-auto bg-cover bg-center relative cursor-pointer "
		on:mouseenter={enter}
	>
		{#if hovering}
			<TopBarProfileInfo />
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
