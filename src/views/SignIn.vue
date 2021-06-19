<template>
  <Form class="signIn" v-slot="{errors}">
    <h2>管理員登入</h2>
    <div class="formGroup mb-3">
      <label for="email">帳號</label>
      <Field type="email" class="form-control" :class="{'is-invalid': errors['email']}"
      id="email" name="email" v-model.trim="user.username" placeholder="請輸入email"
      rules="required|email"></Field>
      <ErrorMessage class="invalid-feedback" name="email"></ErrorMessage>
    </div>
    <div class="formGroup mb-3">
      <label  for="password">密碼</label>
      <Field type="password" class="form-control" :class="{'is-invalid': errors['密碼']}"
      id="password" name="密碼" v-model.trim="user.password" placeholder="請輸入密碼"
      rules="required|email"></Field>
      <ErrorMessage class="invalid-feedback" name="密碼"></ErrorMessage>
    </div>
    <div class="formGroup mb-3">
      <button type="submit" class="btn btn-primary w-100">登入</button>
    </div>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
};
</script>
