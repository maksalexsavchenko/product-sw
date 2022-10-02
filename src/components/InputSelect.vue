<template>
<div class="input-with-select">
  <div v-if="isDropDown" class="input-search">
    <search-icon class="input-search_icon" />
    <input
        :value="search"
        type="text"
        placeholder="Search from 1400 coins"
    />
    <close-search-icon @click="selectHandler" class="input-search_close"/>
  </div>
  <div v-if="editable && !isDropDown" class="input-state">
    <input
        :value="value"
        @blur="$emit('blur')"
        @input="emit($event.target.value)"
        type="text"
        required
        @keyup="onlyNumbers"
    />
    <label>{{ text }}</label>
  </div>

  <div v-if="!editable && !isDropDown" class="input-state input-state-readonly">
    <input
        :value="value"
        @blur="$emit('blur')"
        @input="emit($event.target.value)"
        type="text"
        required
        @keyup="onlyNumbers"
        readonly
    />
    <label>{{ text }}</label>
    <transition name="fade" mode="out-in">
      <div v-if="loader" class="loader-curs">
        <spinner-img/>
      </div>
    </transition>
  </div>
  <div
      v-if="!isDropDown"
      class="input-select"
      @click="selectHandler"
  >
    <div class="select-item">
      <img class="coin-img" :src="coin.image" alt="" />
      <div class="coin-info">
        <div class="coin-info-name">{{ coin.shortName }}</div>
        <div class="coin-info-network">{{ coin.network }}</div>
      </div>
      <ArrowDownIcon class="arrow"/>
    </div>
  </div>
</div>
</template>

<script>
import SpinnerImg from "@/assets/img/icons/spinnerImg";
import ArrowDownIcon from "@/assets/img/icons/arrowDownIcon";
import SearchIcon from "@/assets/img/icons/searchIcon";
import CloseSearchIcon from "@/assets/img/icons/closeSearchIcon";
export default {
  name: "InputSelect",
  components: {CloseSearchIcon, SearchIcon, ArrowDownIcon, SpinnerImg},
  props: {
    text: {
      type: String,
      default: "Place your text here",
    },
    coin: {
      type: Object,
      default: null
    },
    value: {
      type: String,
    },
    isNumber: {
      type: Boolean,
      default: false,
      required: false,
    },
    error: {
      type: [Boolean, Number],
      default: false
    },
    errorMessage: {
      type: String,
    },
    editable: {
      type: Boolean,
      default: true
    },
    loader: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDropDown: false,
      coinsData: null,
      search: '',
      originCoins: null,
    };
  },
  methods: {
    emit(value) {
      if (!value) {
        value = null;
      }

      if (this.isNumber) {
        value = this.replaceValueToNumber(value);
      }
      this.$emit("update:value", value);
    },
    replaceValueToNumber(value) {
      const regex = /[^\d.]/g;
      return value.replace(regex, "");
    },
    selectHandler() {
      this.isDropDown = !this.isDropDown;
      // if (!this.coinsData) {
      //   this.getCoinsData()
      // }
    },
    onlyNumbers(e) {
      if (this.isNumber) {
        e.target.value = this.replaceValueToNumber(e.target.value);
      }
    },
    // getCoinsData() {
    //   CoinsService.getCoinsList().then((res) => {
    //     this.coinsData = res.data.result
    //     this.originCoins = [...this.coinsData];
    //   })
    // },
    youGetFormatter(value) {
      if (value) {
        return '~ ' + value.toFixed(8)
      } else {
        return ''
      }
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/components/input-select';
</style>
