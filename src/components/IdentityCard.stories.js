import { storiesOf } from "@storybook/vue";

storiesOf("IdentityCard", module).add("default", () => {
  return {
    template: `
    <identity-card></identity-card>
    `
  };
});
