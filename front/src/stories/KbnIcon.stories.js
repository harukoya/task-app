import KbnIcon from '../components/atoms/KbnIcon.vue';

export default {
  title: 'Atoms/KbnIcon',
  component: KbnIcon,
  argTypes: { handleClick: { action: true} }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KbnIcon },
  template: '<Kbn-icon @click="handleClick" v-bind="$props"></Kbn-icon>'
})

export const plusIcon = Template.bind({});
plusIcon.args = { icon: "fa-plus" }

export const circlePlusIcon = Template.bind({});
circlePlusIcon.args = { icon: "fa-circle-plus" }

export const xmarkIcon = Template.bind({});
xmarkIcon.args = { icon: "fa-xmark" }

export const circleXmarkIcon = Template.bind({});
circleXmarkIcon.args = { icon: "fa-circle-xmark" }
