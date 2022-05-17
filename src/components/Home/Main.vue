<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
            :src="require('../../assets/helmi.jpg')"
            class="my-3 rounded-circle mx-auto"
            contain
            height="200"
            width="200"

        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ name }}
        </h1>
        <p class="subheading font-weight-regular">
          {{ description }}
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-btn class="ma-2 black--text"
               @click="expandGoal = !expandGoal">Goal
        </v-btn>
        <v-expand-transition>
          <v-card v-show="expandGoal"
                  class="mx-auto pb-1">
            <div class="pt-3">
              <v-img
                  :src="require('../../assets/goal.svg')"
                  class="mx-auto mb-2"
                  contain
                  height="70"
                  width="70"

              />
              <p class="px-3">{{ goalText }}</p>
            </div>
          </v-card>
        </v-expand-transition>
      </v-col>
      <v-col class="mb-4">
        <v-btn dark class="ma-2 white--text"
               @click="expandCurrently = !expandCurrently">Currently
        </v-btn>
        <v-expand-transition>
          <v-card v-show="expandCurrently"
                  class="mx-auto pb-1">
            <div class="pt-3">
              <v-img
                  :src="require('../../assets/current.svg')"
                  class="mx-auto mb-2"
                  contain
                  height="70"
                  width="70"

              />
              <p class="px-3">{{ currentlyText }}</p>
            </div>
          </v-card>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Main',

  data: () => ({
    name: "Hi, I'm Helmi",
    description: 'I am a FullStack engineer passionate about creating interactive applications and experiences on the web.',
    expandCurrently: false,
    expandGoal: false,
    goalText: 'To reach senior level both on front-end and back-end knowledge and to increase tech access through sharing and self development',
    currentlyText: 'I live and work in Tunisia, as a Lead Developer for Mazars, My daily works will include fixing bugs Documenting and developing new features and guiding my junior team members',
  }),
}
</script>
