<template>
  <div class="left-bar">
    <v-row class="ma-0 mt-2">
      <v-btn @click="$router.push({ name: 'Supply' })"
             width="50" height="50" depressed>
        <v-img contain height="43" src="@/assets/icons/pig.svg" />
      </v-btn>
    </v-row>
    <v-row class="mx-0 my-2">
      <v-btn @click="$router.push({ name: 'Borrow' })"
             width="50" height="50" depressed>
        <v-img contain height="43" src="@/assets/icons/borrow.svg" />
      </v-btn>
    </v-row>
    <v-row class="ma-0 mb-2">
      <v-btn @click="$router.push({ name: 'Tutorials' })"
             width="50" height="50" depressed>
        <v-img contain height="43" src="@/assets/icons/tutorials.svg" />
      </v-btn>
    </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'LeftBar',
  computed: {
    ...mapState({
      walletAddress: (state) => state.Session.walletAddress,
    }),
  },
  methods: {
    isWalletConnected() {
      return !!this.walletAddress;
    },
    linkToLandingOrHomeUser() {
      if (this.isWalletConnected) return 'UserHome';
      return 'Home';
    },
  },
};
</script>