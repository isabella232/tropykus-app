<template>
  <v-dialog v-model="dialog" width="350" :persistent="dialog">
    <v-card class="tx-status" height="400">
      <div class="container">
        <v-row class="ma-0 d-flex justify-center">
          <v-img height="90" src="@/assets/dialog/error.svg" position="center center"
                 alt="success icon" contain/>
        </v-row>
        <v-row class="ma-0 mt-8 mx-3 d-flex justify-center align-center">
          <h2 class="text-center">{{ dialogText }}</h2>
        </v-row>
        <v-row class="ma-0 mt-10 d-flex justify-center">
          <v-btn color="#41A255" @click="close" width="200">
            <span class="whiteish">{{ $t('dialog.button') }}</span>
          </v-btn>
        </v-row>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import * as constants from '@/store/constants';

export default {
  name: 'ErrorDialog',
  props: {
    showModal: {
      required: true,
      type: Boolean,
    },
    action: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      dialog: this.showModal,
    };
  },
  computed: {
    dialogText() {
      switch (this.action) {
        case constants.USER_ACTION_MINT:
          return this.$t('dialog.error.description1');
        case constants.USER_ACTION_REDEEM:
          return this.$t('dialog.error.description2');
        case constants.USER_ACTION_BORROW:
          return this.$t('dialog.error.description3');
        case constants.USER_ACTION_REPAY:
          return this.$t('dialog.error.description4');
        default:
          return '';
      }
    },
  },
  methods: {
    close() {
      this.dialog = false;
      this.$emit('close');
    },
  },
};
</script>
