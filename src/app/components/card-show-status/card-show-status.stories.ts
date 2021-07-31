import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { PipeModule } from 'src/app/pipe/pipe.module';
import {CardShowStatusComponent, EWeatherIcon} from './card-show-status.component';
import {withKnobs} from '@storybook/addon-knobs';

export default {
  title: 'Components/CardShowStatus',
  component: CardShowStatusComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [PipeModule]
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
