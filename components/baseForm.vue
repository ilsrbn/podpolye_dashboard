<template>
  <component :is="wrapper">
    <div v-for="(field, key) in fields" :key="field.id">
      <v-text-field
        v-if="isTextField(field.type)"
        :id="key"
        :type="field.type"
        :label="field.label"
        v-model="field.value"
      />
      <v-textarea
        v-else-if="field.type === 'textarea'"
        :id="key"
        :label="field.label"
        v-model="field.value"
      />
      <v-autocomplete
        v-else-if="field.type === 'select'"
        :id="key"
        :label="field.label"
        :items="field.options"
        
        item-text="label"
        item-value="value"
        v-model="field.value"
      />
      <v-radio-group
        v-else-if="field.type === 'radio'"
        :label="field.label"
        v-model="field.value"
      >
        <v-radio
          v-for="option in field.options"
          :key="option.value"
          :value="option.value"
          :label="option.label"
        />
      </v-radio-group>
      <v-file-input v-else-if="field.type === 'file'" chips :id="key" :label="field.label" v-model="field.value" :accept="field.accept || 'image/*'" :multiple="field.multiple || false"/>
      <v-row v-else-if="field.type === 'date'">
        <v-col cols="12">
          <v-label :for="key">{{ field.label }}</v-label>
        </v-col>
        <v-col>
          <DP
            :id="key"
            v-model="field.value"
            :label="field.label"
            class="mb-2"
            :enable-time-picker="false"
            :clearable="false"
            dark
            teleport-center
            utc
            locale="ru"
          />
        </v-col>
      </v-row>
    </div>
  </component>
</template>

<script>


export default {
  name: "BaseForm",
  props: {
    fields: {
      type: Object,
      required: false,
      default: () => {}
    },
    wrapper: {
      type: String,
      required: false,
      default: "div"
    }
  },
  methods: {
    isTextField(type) {
      const types = ["text", "password", "number", "email"]
      return types.includes(type)
    }
  }
}
</script>

<style>
.dp__theme_dark {
   
   --dp-text-color: rgba(255, 255, 255, 0.44);
   --dp-hover-color: #484848;
   --dp-hover-text-color: #ffffff;
   --dp-hover-icon-color: #959595;
   --dp-primary-color: #005cb2;
   --dp-primary-text-color: #ffffff;
   --dp-secondary-color: #a9a9a9;
   --dp-border-color: #2d2d2d;
   --dp-menu-border-color: #2d2d2d;
   --dp-border-color-hover: #aaaeb7;
   --dp-disabled-color: #737373;
   --dp-scroll-bar-background: #212121;
   --dp-scroll-bar-color: #484848;
   --dp-success-color: #00701a;
   --dp-success-color-disabled: #428f59;
   --dp-icon-color: #959595;
   --dp-danger-color: #e53935;
   --dp-highlight-color: rgba(0, 92, 178, 0.2);
}
</style>
