<script>
    import Sidebar from "./sidebar/Sidebar.svelte";
    import MainContent from "./maincontent/MainContent.svelte";
    import CloseSection from "./close/CloseSection.svelte";
</script>

<div
    class="absolute inset-0 z-30 flex min-w-full min-h-full" style="background-color: rgb(250, 250, 250); width: 100vw; height: 100vh;"
>
    <Sidebar
     />
    <MainContent />
    <CloseSection />
</div>
