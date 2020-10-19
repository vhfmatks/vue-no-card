<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="8">
          <v-text-field
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="input password"
            hint="At least 8 characters"
            v-model="password"
            class="input-group--focused"
            @click:append="show3 = !show3"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="8">
          <v-text-field
            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, passwordConfirmRule ]"
            :type="show4 ? 'text' : 'password'"
            name="input-10-2"
            label="input password again"
            hint="At least 8 characters"
            v-model="password2"            
            @click:append="show4 = !show4"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="nickname"
            :rules="nameRules"
            label="Nickname"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-btn @click="signup()">
            signup
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import firebase from 'firebase'

export default {

  computed : {
    passwordConfirmRule(){
      return  (this.password === this.password2) || 'Password must match'
    }
  },
  methods : {
    signup(){
      console.log(this.password, this.password2);
      if( this.email === "" )  return alert('check email');
      if( this.password === "" )  return alert('check password');
      if(this.password !== this.password2 ) return alert('Password must match');
      
      var user = null;
      var displayName = this.nickname;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then ( () => {
        // user = firebase.auth().currentUser ;
        return firebase.auth().user.sendEmailVerification();   
      })
      .then( function() {
        return user.updateProfile({
          displayName
        })
      })
      .catch( (err) => {
        console.log("Create User " , err.code, err.message )
      })
    }
  },
  data: () => ({
    valid: false,
    nickname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    show3: false,
    show4: false,
    password: "",
    password2: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
};
</script>

<style>
</style>