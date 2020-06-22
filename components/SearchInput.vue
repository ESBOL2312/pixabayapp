<template>
	<div class="search-input">
		<form class="d-flex align-center">
			<v-text-field title="search"
          		v-model="query"
          		required
        	>
        	</v-text-field>
        	<v-btn class="ml-5" small icon>
      			<v-icon >mdi-cloud-search-outline</v-icon>
    		</v-btn>
		</form>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				query:''
			}
		}
	}
</script>
<style>

</style>