<script>
	import { Router, Route, Link } from "svelte-routing";
	import Profile from "./pages/Profile.svelte";
	export let url = "";
</script>

<Router url="{url}">
	<Route path="profile" component="{Profile}"></Route>
</Router>