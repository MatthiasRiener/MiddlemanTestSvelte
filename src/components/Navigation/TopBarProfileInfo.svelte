<script>
	import ProfileInfoPopupItem from './ProfileInfoPopupItem.svelte';
</script>

<div class="profile-info-popup absolute bg-white flex-col items-start box-border rounded-10 p-1">
	
	<div on:click={() => {console.log("Moin")}}>
		<ProfileInfoPopupItem 
		iconName="" id="profile-settings-edit" itemText="Profile Settings"/>	
	</div>

	<div class="profile-info-vert-aligner" />

	<ProfileInfoPopupItem iconName="person-circle-outline" itemText="Explore creators" />
	<ProfileInfoPopupItem iconName="heart-outline" itemText="Manage membership" />
	<ProfileInfoPopupItem iconName="compass-outline" itemText="Invite creators" />

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
