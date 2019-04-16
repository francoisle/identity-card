<template>
  <div class="container">
    <div class="container__title">
      <h1>Fiche d'information</h1>
      <div class="container__title__button">
        <button>{{ canEdit ? "Mode Lecture Seule" : "Modifier" }}</button>
      </div>
    </div>
    <div class="container__body">
      <div class="container__body__top-part">
        <div class="card-input">
          <label class="card-label" for="first-name">Prénom</label>
          <input
            :class="{ 'read-only': !canEdit }"
            :readonly="!canEdit"
            id="first-name"
            maxlength="20"
            type="text"
            v-model="firstName"
          />
        </div>
        <div class="card-input">
          <label class="card-label" for="last-name">Nom de famille:</label>
          <input
            :class="{ 'read-only': !canEdit }"
            :readonly="!canEdit"
            id="last-name"
            maxlength="20"
            type="text"
            v-model="lastName"
          />
        </div>
        <button class="container__body__top-part__button">
          {{
            extended ? "Montrer moins de details" : "Montrer plus de détails"
          }}
        </button>
      </div>

      <div class="container__body__bottom-part" v-if="extended">
        <div class="card-input">
          <label class="card-label" for="favorite-color"
            >Couleur préférée:</label
          >
          <input
            :class="{ 'read-only': !canEdit }"
            :readonly="!canEdit"
            id="favorite-color"
            maxlength="20"
            type="text"
            v-model="favoriteColor"
          />
        </div>
        <div class="card-input">
          <label class="card-label" for="favorite-movie">Film préféré:</label>
          <input
            :class="{ 'read-only': !canEdit }"
            :readonly="!canEdit"
            id="favorite-movie"
            maxlength="20"
            type="text"
            v-model="favoriteMovie"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canEdit: {
      type: Boolean,
      required: false,
      default: true
    },
    extended: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      favoriteColor: "",
      favoriteMovie: ""
    };
  },
  name: "identity-card"
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 500px;
  border: 2px solid green;
  padding: 10px 25px;
  border-radius: 5px;
  background-color: rgba(128, 0, 128, 0.2);
  color: blue;
}

.container__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.container__title__button {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container__body__top-part {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 25px;
}

.container__body__top-part,
.container__body__bottom-part {
  margin-left: 10px;
}

.container__body__top-part__button {
  align-self: flex-end;
}

.card-input {
  margin-bottom: 10px;
}

.card-label {
  display: inline-block;
  min-width: 150px;
}

.read-only {
  background-color: lightgrey;
}
</style>
