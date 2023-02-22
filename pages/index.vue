<template>
  <div>
    <!-- Home -->
    <section>
      <v-sheet id="home" class="d-flex flex-column align-center justify-center">
        <div class="text-h5 text-sm-h3 text-center font-weight-normal my-15">
          <span style="font-family: 'Lucida Handwriting'">WELCOME!</span>
        </div>
        <div class="text-h4 text-sm-h2 text-center font-weight-medium mb-15">
          <span style="font-family: 'Lucida Handwriting'">
            My Name Is JEFF
          </span>
        </div>
        <div class="text-center my-15">
          <v-btn fab outlined @click="goTo('#intro')">
            <v-icon size="32">$vuetify.icons.mdiChevronDown</v-icon>
          </v-btn>
        </div>
      </v-sheet>
    </section>

    <!-- Intro -->
    <section>
      <v-sheet
        id="intro"
        class="d-flex flex-column align-center justify-space-around"
      >
        <div
          class="text-h3 text-sm-h2 text-center black--text font-weight-bold my-5"
        >
          <span style="font-family: 'Lucida Handwriting'"> ABOUT ME </span>
        </div>
        <div class="text-center my-5">
          <v-avatar size="200">
            <img alt="Profile Picture" src="/profile.webp" />
          </v-avatar>
        </div>
        <div class="my-5">
          <div
            class="blue-grey darken-2 text-right rounded-t"
            style="height: 25px"
          >
            <v-avatar size="15" color="success" class="mx-1"></v-avatar>
            <v-avatar size="15" color="warning" class="mx-1"></v-avatar>
            <v-avatar size="15" color="error" class="mx-1"></v-avatar>
          </div>
          <div class="blue-grey lighten-4 py-3 px-3 rounded-b">
            <span
              class="indigo--text text--darken-3"
              style="font-family: consolas"
            >
              &#x3c;BasicInfo&#x3e;
            </span>
            <div v-for="(detail, i) in details" :key="i">
              <span
                class="indigo--text text--darken-3"
                style="font-family: consolas"
              >
                &nbsp;&nbsp;&#x3c;{{ detail.key }}&#x3e;
              </span>
              <span
                class="purple--text text--darken-4 font-weight-bold"
                style="font-family: consolas"
              >
                {{ detail.value }}
              </span>
              <span
                class="indigo--text text--darken-3"
                style="font-family: consolas"
              >
                &#x3c;/{{ detail.key }}&#x3e;
              </span>
            </div>
            <span
              class="indigo--text text--darken-3"
              style="font-family: consolas"
            >
              &#x3c;/BasicInfo&#x3e;
            </span>
          </div>
        </div>
      </v-sheet>
    </section>

    <!-- Interest -->
    <section>
      <v-sheet
        id="interest"
        class="d-flex flex-column align-center justify-space-around"
      >
        <div
          class="text-h3 text-sm-h2 text-center black--text font-weight-bold my-5"
        >
          <span style="font-family: 'Lucida Handwriting'"> INTERESTS </span>
        </div>
        <v-card class="my-5">
          <v-tabs
            v-model="tab"
            centered
            icons-and-text
            color="orange lighten-1"
          >
            <v-tab href="#tab-0">
              Travel
              <v-icon>$vuetify.icons.mdiAirplane</v-icon>
            </v-tab>

            <v-tab href="#tab-1">
              Board Game
              <v-icon>$vuetify.icons.mdiGamepadSquare</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
              Coding
              <v-icon>$vuetify.icons.mdiCodeBraces</v-icon>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="(interest, j) in interests"
              :key="j"
              :value="'tab-' + j"
            >
              <div>
                <v-img
                  :alt="'interest-' + interest.name"
                  :src="interest.photo"
                  :height="$vuetify.breakpoint.xs ? 350 : '50vh'"
                  :width="$vuetify.breakpoint.xs ? 350 : '50vh'"
                ></v-img>
              </div>
              <div class="text-center text-subtitle-1 py-2">
                <span style="font-family: 'Lucida Handwriting'">
                  {{ interest.comment }}
                </span>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-sheet>
    </section>

    <!-- Contact Me -->
    <section>
      <v-sheet
        id="contact"
        class="d-flex flex-column align-center justify-space-around"
      >
        <div
          class="text-h4 text-sm-h2 text-center black--text font-weight-bold my-5"
        >
          <span style="font-family: 'Lucida Handwriting'">
            WANT TO KNOW MORE ABOUT ME?
          </span>
        </div>
        <div class="my-15">
          <v-btn
            v-for="(media, k) in medias"
            :key="k"
            fab
            color="teal"
            class="mx-1"
            :href="media.link"
            target="_blank"
            rel="noreferrer"
          >
            <v-icon large>{{ media.icon }}</v-icon>
          </v-btn>
        </div>
        <div
          class="text-h4 text-sm-h2 text-center black--text font-weight-bold my-5"
        >
          <span style="font-family: 'Lucida Handwriting'"> OR </span>
        </div>
        <div class="my-15">
          <v-btn
            outlined
            large
            color="indigo darken-4"
            href="https://resume.shenghow.link"
            target="_blank"
            rel="noreferrer"
          >
            View My Resume
          </v-btn>
        </div>
      </v-sheet>
    </section>

    <section>
      <v-sheet id="footer" class="text-center black--text">
        &copy; 1995 - {{ year }} — Made with 💜 by Jeff Kong
      </v-sheet>
    </section>

    <!-- Back To Top Button -->
    <v-fab-transition>
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        medium
        bottom
        right
        fixed
        elevation="2"
        color="primary"
        @click="goTo('#home')"
      >
        <v-icon size="32">$vuetify.icons.mdiChevronUp</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  layout: 'default',
  components: {},
  data: () => ({
    year: new Date().getFullYear(),
    fab: false,
    details: [
      { key: 'Name', value: 'Kong Sheng How' },
      { key: 'Nickname', value: 'Jeff' },
      { key: 'Age', value: 27 },
      { key: 'Role', value: 'Backend Engineer' },
      { key: 'Location', value: 'Singapore' },
    ],
    tab: null,
    interests: [
      {
        name: 'travel',
        photo: 'travel.webp',
        comment: 'YOLO! Never Stop The Adventures!',
      },
      {
        name: 'board game',
        photo: 'boardgame.webp',
        comment: 'Play Board Games? We are FREINDS!',
      },
      {
        name: 'coding',
        photo: 'coding.webp',
        comment: "Create Bugs? That's My Expertise!",
      },
    ],
    medias: [
      {
        name: 'facebook',
        icon: '$vuetify.icons.mdiFacebook',
        link: 'https://www.facebook.com/JeffKong95',
      },
      {
        name: 'instagram',
        icon: '$vuetify.icons.mdiInstagram',
        link: 'https://www.instagram.com/jeff_how95/',
      },
      {
        name: 'linkedin',
        icon: '$vuetify.icons.mdiLinkedin',
        link: 'https://www.linkedin.com/in/sheng-how-kong/',
      },
      {
        name: 'gmail',
        icon: '$vuetify.icons.mdiGmail',
        link: 'mailto:shenghow95.com',
      },
    ],
  }),
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    goTo(id) {
      this.$vuetify.goTo(id)
    },
    getAge() {
      const year = new Date().getFullYear()
      return year - 1995
    },
  },
}
</script>

<style scoped>
#home {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('/background1.webp');
  background-size: cover;
  background-position: center center;
  height: calc(100vh);
}

#intro {
  height: max-content;
  background-color: rgba(245, 245, 245, 0.95);
  background-image: url('/background2.png'), url('/background3.png');
  background-position: top left, bottom right;
  padding: 5% 0% 5% 0%;
}

#interest {
  height: max-content;
  background-color: rgba(200, 200, 200, 0.95);
  background-image: url('/background2.png'), url('/background3.png');
  background-position: top left, bottom right;
  padding: 5% 0% 5% 0%;
}

#contact {
  height: max-content;
  background-color: rgba(245, 245, 245, 0.95);
  padding: 5% 0% 5% 0%;
}

#footer {
  height: max-content;
  background-color: white;
  padding: 1% 0% 1% 0%;
}
</style>
