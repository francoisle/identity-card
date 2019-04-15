import Vue from "vue";
import { configure } from "@storybook/vue";

import IdentityCard from "../src/components/IdentityCard.vue";
Vue.component("identity-card", IdentityCard);

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
