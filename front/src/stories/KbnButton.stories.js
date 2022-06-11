import KbnButton from '../components/atoms/KbnButton.vue';

export default {
  title: 'Atoms/KbnButton',
  component: KbnButton,
  argTypes: { handleClick: { action: true } }
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {KbnButton},
  template: '<kbn-button @click="handleClick" v-bind="$props">Button</kbn-button>',
})

export const defaultButton = Template.bind({});

export const disableButton = Template.bind({});
disableButton.args = {
  disabled: true
};

export const textType = Template.bind({});
textType.args = {
  type: 'text'
};

