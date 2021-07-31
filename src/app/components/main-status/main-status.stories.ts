import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import {withKnobs} from '@storybook/addon-knobs';
import {ComponentsModule} from '../component.module';
import {MainStatusComponent} from './main-status.component';

export default {
  title: 'Components/MainStatus',
  component: MainStatusComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ComponentsModule]
    })
  ]
} as Meta;

const Template: Story<MainStatusComponent> = (args: MainStatusComponent) => ({
  props: args
});

export const MainStatus = Template.bind({});
MainStatus.args = {};
