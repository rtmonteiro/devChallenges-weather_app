import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import {CardShowStatusComponent, EWeatherIcon} from './card-show-status.component';
import {withKnobs} from '@storybook/addon-knobs';
import {ComponentsModule} from '../component.module';

export default {
  title: 'Components/CardShowStatus',
  component: CardShowStatusComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ComponentsModule]
    })
  ]
} as Meta;

const Template: Story<CardShowStatusComponent> = (args: CardShowStatusComponent) => ({
  props: args
});

export const CardShowStatus = Template.bind({});
CardShowStatus.args = {
  weatherStatus: {
    iconType: EWeatherIcon.SLEET,
    date: 'Tomorrow',
    maxTemperature: 16,
    minTemperature: 11
  }
};
