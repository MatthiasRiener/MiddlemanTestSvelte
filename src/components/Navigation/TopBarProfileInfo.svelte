<script>
	import ProfileInfoPopupItem from "./ProfileInfoPopupItem.svelte";
	import ProfileSettings from "./sections/ProfileSettings/ProfileSettings.svelte";

	export let closeHandler = () => {};

	let profileSettingsVisible = false;
</script>

{#if profileSettingsVisible}
	<ProfileSettings />
{/if}

<div
	class="box-border absolute flex-col items-start p-1 bg-white profile-info-popup rounded-10"
>
	<div
		on:click={() => {
			profileSettingsVisible = !profileSettingsVisible;
			closeHandler()
		}}
	>
		<ProfileInfoPopupItem
			iconName=""
			id="profile-settings-edit"
			itemText="Profile Settings"
		/>
	</div>

	<div class="profile-info-vert-aligner" />

	<ProfileInfoPopupItem
		iconName="person-circle-outline"
		itemText="Explore creators"
	/>
	<ProfileInfoPopupItem
		iconName="heart-outline"
		itemText="Manage membership"
	/>
	<ProfileInfoPopupItem
		iconName="compass-outline"
		itemText="Invite creators"
	/>

	<div class="profile-info-vert-aligner" />

	<ProfileInfoPopupItem iconName="" id="logout-top-bar" itemText="Log out" />
</div>

<style>
	.profile-info-popup {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		transform: translate(-40%, 18%);
	}

	.profile-info-vert-aligner {
		width: 100%;
		height: 2px;
		background: #878c90;
		margin: 0.6vw 0;
	}
</style>
