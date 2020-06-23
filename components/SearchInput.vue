<template>
  <div class="search-input">
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
			<v-card-title>
				search
			</v-card-title>
			<v-card-text>
				<form>
            		<v-text-field title="search" v-model="query" required></v-text-field>
          			</form>
			</v-card-text>
          <v-card-actions>
            <v-btn round color="green darken-1" text @click="dialog = false">
				<v-icon small>
					mdi-close
				</v-icon>
			</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-btn class="ml-5" @click.stop="dialog = true" small icon>
      <v-icon>mdi-cloud-search-outline</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: "",
      dialog: false
    };
  }
};
</script>
<style>
</style>