import { Meta, Story } from '@storybook/angular/types-6-0';
import {CardShowStatusComponent} from './card-show-status.component';

export default {
  title: 'Components/CardShowStatus',
  component: CardShowStatusComponent,

} as Meta;

const Template: Story<CardShowStatusComponent> = (args: CardShowStatusComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
};
