<script>
    import SettingsTitle from "./SettingsTitle.svelte";
    import SettingsItem from "./SettingsItem.svelte";
    import SidebarSpacer from "./SidebarSpacer.svelte";
</script>

<div class="flex flex-col items-end ml-15w" style="background: rgb(250, 250, 250)">
    <div class="box-border px-1 side-bar-settings-container pt-7h">
        <div class="bg-center bg-cover top-bar-logo-settings bg-tblogo mr-1w rounded-8" ></div>
            <SettingsTitle title="Benutzer" />
            <SettingsItem isActive="true" itemID="-account" itemTitle="Mein Account" />
            <SettingsItem itemID="privacy" itemTitle="Privacy & Safety" />
            <SidebarSpacer />
            <SettingsTitle title="Rechnung" />
            <SettingsItem itemID="subscriptions" itemTitle="Abonnements" />
            <SettingsItem itemID="transactions" itemTitle="Billing" />
            <SidebarSpacer />
            <SettingsTitle title="Applikation" />
            <SettingsItem itemID="appearence" itemTitle="Appearence" />
            <SettingsItem itemID="language" itemTitle="Sprache" />
            <SidebarSpacer />
            <SettingsItem itemID="language" itemTitle="Abmelden" isLogout="true" />
            <SidebarSpacer />
            <div class="cursor-pointer text-icon">
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
            </div>

            <div class="text-timeAgo">
                <p>Version: 1.1.3</p>
                <p>Host: 0.0.73</p>
                <p>Chrome: 10.0.73</p>
            </div>

    </div>
</div>


<style>
    .top-bar-logo-settings {
        width: 2.4vw;
        height: 2.4vw;
        margin-bottom: 1.5vw;
        transform: translateX(-20%)
    }
</style>