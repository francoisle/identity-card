import { storiesOf } from "@storybook/vue";

storiesOf("IdentityCard", module)
  .add("default", () => {
    return {
      template: `
      <identity-card
      />
    `
    };
  })
  .add("in read-only mode", () => {
    return {
      template: `
      <identity-card :canEdit="false"
      />
    `
    };
  })
  .add("in reduced mode", () => {
    return {
      template: `
      <identity-card :extended="false"
      />
    `
    };
  });
