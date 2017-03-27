<template>
	<div>
		<h1>Home</h1>
		<p>This is the homepage</p>
		
		<router-link to="page">Page</router-link> 
	</div>
</template>
<script>
export default{
	mounted(){
		console.log("hi home"); 
	}
}
</script>
<style lang='sass'>

</style>