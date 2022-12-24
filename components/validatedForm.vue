<template>
  <Form>
    <Field
        v-for="(field, key) in schema"
        :id="key" :name="key"
        v-model="field['v-model']"
        :rules="field.rules"
        v-slot="{ errors }"
    >
      <component
          :is="field.as"
          :label="field.label"
          :error-messages="errors"
          v-model="field['v-model']"
      />
    </Field>
  </Form>
</template>

<script>
import { Form, Field } from "vee-validate";
export default {
  name: "validatedForm",
  components: {Form, Field},
  props: {
    schema: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>