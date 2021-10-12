<script>
	export let iconName;
	export let itemText;
	export let id = undefined;
</script>

<div class="profile-info-popup-item" {id}>
	{#if iconName}
		<ion-icon name={iconName} class="profile-info-icon" />
	{/if}

	<p>{itemText}</p>
</div>

<style>
	.profile-info-popup-item {
		color: #35383b;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.4vw 0.4vw;
		color: #35383b;
		font-size: 1rem;
		cursor: pointer;
		overflow: hidden;
		white-space: nowrap;
	}

	.profile-info-popup-item:hover {
		color: #35383b;
		font-weight: 500;
	}

	.profile-info-vert-aligner {
		width: 100%;
		height: 2px;
		background: #878c90;
		margin: 0.6vw 0;
	}

	.profile-info-icon {
		margin-right: 0.5vw;
		font-size: 1.4rem;
	}
</style>
