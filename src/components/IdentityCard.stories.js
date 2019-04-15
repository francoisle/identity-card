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
      props: {
        canEdit: false
      },
      template: `
      <identity-card :canEdit="canEdit"
      />
    `
    };
  })
  .add("in reduced mode", () => {
    return {
      props: {
        extended: false
      },
      template: `
      <identity-card :extended="extended"
      />
    `
    };
  });
