<template>
  <div class="menu_wrapper">
    <div class="menu_content">
      <span :class="['menu_content_item', categorie == 'akt' ? 'menu_content_item_active' : '']" @click="
        categorie = 'akt';
      this.$router.push({ name: 'index', query: { shooting: names.S_1.route, categorie: 'akt' } });
      ">
        <p>Akt</p>
      </span>
      <span :class="['menu_content_item', categorie == 'fairytale' ? 'menu_content_item_active' : '']" @click="
        categorie = 'fairytale';
      this.$router.push({ name: 'index', query: { shooting: names.S_2.route, categorie: 'fairytale' } });
      ">
        <p>Fairytale</p>
      </span>
      <span :class="['menu_content_item', categorie == 'portrait' ? 'menu_content_item_active' : '']" @click="
        categorie = 'portrait';
      this.$router.push({ name: 'index', query: { shooting: names.S_3.route, categorie: 'portrait' } });
      ">
        <p>Portrait</p>
      </span>
      <span :class="['menu_content_item', categorie == 'fashion' ? 'menu_content_item_active' : '']" @click="
        categorie = 'fashion';
      this.$router.push({ name: 'index', query: { shooting: names.S_5.route, categorie: 'fashion' } });
      ">
        <p>Fashion</p>
      </span>
    </div>
    <Transition name="rotateY" mode="out-in">
      <div class="menu_content" v-if="categorie == 'akt'">
        <div :class="['menu_content_item', query == names.S_1.route ? 'menu_content_item_active' : '']">
          <p @click="this.$router.push({ name: 'index', query: { shooting: names.S_1.route, categorie: 'akt' } })">{{
            names.S_1.name }}</p>
        </div>
      </div>
      <div class="menu_content" v-else-if="categorie == 'fairytale'">
        <div :class="['menu_content_item', query == names.S_2.route ? 'menu_content_item_active' : '']">
          <p @click="this.$router.push({ name: 'index', query: { shooting: names.S_2.route, categorie: 'fairytale' } })">
            {{
              names.S_2.name }}</p>
        </div>
        <div :class="['menu_content_item', query == names.S_6.route ? 'menu_content_item_active' : '']">
          <p @click="this.$router.push({ name: 'index', query: { shooting: names.S_6.route, categorie: 'fairytale' } })">
            {{
              names.S_6.name }}</p>
        </div>
      </div>
      <div class="menu_content" v-else-if="categorie == 'portrait'">
        <div :class="['menu_content_item', query == names.S_3.route ? 'menu_content_item_active' : '']">
          <p @click="this.$router.push({ name: 'index', query: { shooting: names.S_3.route, categorie: 'portrait' } })">{{
            names.S_3.name }}</p>
        </div>
        <div :class="['menu_content_item', query == names.S_4.route ? 'menu_content_item_active' : '']">
          <p @click="this.$router.push({ name: 'index', query: { shooting: names.S_4.route, categorie: 'portrait' } })">{{
            names.S_4.name }}</p>
        </div>
        <div :class="['menu_content_item', query == names.S_7.route ? 'menu_content_item_active' : '']">
          <p @click="this.$router.push({ name: 'index', query: { shooting: names.S_7.route, categorie: 'portrait' } })">{{
            names.S_7.name }}</p>
        </div>
        <div :class="['menu_content_item', query == names.S_8.route ? 'menu_content_item_active' : '']">
          <p @click="this.$router.push({ name: 'index', query: { shooting: names.S_8.route, categorie: 'portrait' } })">{{
            names.S_8.name }}</p>
        </div>
      </div>
      <div class="menu_content" v-else-if="categorie == 'fashion'">
        <div :class="['menu_content_item', query == names.S_5.route ? 'menu_content_item_active' : '']">
          <p @click="this.$router.push({ name: 'index', query: { shooting: names.S_5.route, categorie: 'fashion' } })">{{
            names.S_5.name }}</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redirecter: [],
      names: {},
      query: "czfotografie",
      categorie: "akt",
    };
  },
  watch: {
    $route() {
      this.query = this.$route.query.shooting;
    },
  },
  created() {
    const runtimeConfig = useRuntimeConfig();
    this.names = runtimeConfig.public;
    this.redirecter = [`/${this.names.S_1.route}`, `/${this.names.S_2.route}`];
  },
  mounted() {
    // It is set to redirect but if JS is enabeled it will deactivate this function
    this.redirecter = [];
    if (!this.$route.query.shooting || !this.$route.query.categorie) {
      this.$route.query.shooting = "czfotografie";
      this.$route.query.categorie = "akt";
    }
    this.query = this.$route.query.shooting;
    this.categorie = this.$route.query.categorie;
  },
};
</script>

<style lang="scss">
.menu {
  &_wrapper {
    background-color: $main-background-color;
    padding: 10px 5px 10px 5px;
    max-width: $max-content-width;
    margin: 5px auto;
    overflow: hidden;
  }

  &_content {
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 5px 0;

    &_item {
      min-width: max-content;
      padding: 1rem;
      margin: 0 auto;
      gap: 1rem;
      transition: ease-out 0.2s all;
      border-radius: 10px;

      &_active {
        background-color: $dark-background-color;

        p {
          color: $light-font-color !important;
        }
      }

      p {
        color: $main-font-color;
        width: fit-content;
        margin: 0 auto;
        font-weight: 600;
        transition: ease-out 0.2s all;
        font-size: 1rem;
      }
    }
  }
}

a.nuxt-link-active {
  font-weight: bold;
}

.rotateY-enter-active,
.rotateY-leave-active {
  transition: all 0.25s ease-out;
}

.rotateY-enter-from {
  transform: translateY(-200%);
  opacity: 0;
}

.rotateY-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@media only screen and (min-width: 750px) {
  .menu {
    &_content {
      flex-wrap: wrap;
    }
  }
}
</style>
