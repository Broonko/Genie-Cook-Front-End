<template>
  <v-card class="px-4">
    <v-card-text>
      <v-form ref="loginForm" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="loginEmail"
              :rules="loginEmailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
            <v-btn
              class="button"
              x-large
              block
              :disabled="!valid"
              color="success"
              @click="validate"
            >
              Login
            </v-btn>
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      valid: true,
      password: "",
      show1: false,
      loginEmail: "",
      loginEmailRules: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => (v && v.length >= 8) || "Min 8 characters",
      },
    };
  },
  methods: {
    validate: function() {
      if (this.$refs.form.validate()) {
        // authService
        //   .register(this.name, this.email, this.password)
        //   .then((response) => {
        //     localStorage.setItem("token", response.token);
        //     this.$route.push({ path: "/Profile" });
        //   });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
