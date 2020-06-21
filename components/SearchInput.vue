<template>
	<div class="search-input">
		<form>
			<v-text-field
          		v-model="query"
          		required
        	>
        	</v-text-field>
        	<v-btn class="mx-2" fab dark small color="pink">
      			<v-icon dark>mdi-heart</v-icon>
    		</v-btn>
		</form>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style>

</style>