import KbnLoginForm from '../../components/molecules/KbnLoginForm'

export default {
  title: 'Molecules/KbnLoginForm',
  component: KbnLoginForm,
  argTypes: { handleClick: { action: true } }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KbnLoginForm },
  template: '<KbnLoginForm v-bind="$props"></KbnLoginForm>',
})

export const LoginForm = Template.bind({});
LoginForm.args = {
  onlogin() {
    console.log('aaa')
  }
}
