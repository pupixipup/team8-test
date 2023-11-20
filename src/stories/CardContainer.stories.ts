
import type { Meta, StoryObj } from '@storybook/react';
import CardContainer from '@/widgets/Card/ui/CardContainer';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/CardContainer',
  component: CardContainer,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} satisfies Meta<typeof CardContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    stack: ["React.js", "Angular", "Django", "GraphQL", "Laravel"],
    languages: ["js", "python", "jdas"],
    data: {
      "results": [
          {
              "gender": "female",
              "name": {
                  "title": "Mrs",
                  "first": "Emilija",
                  "last": "Borgen"
              },
              "location": {
                  "street": {
                      "number": 6598,
                      "name": "Tråkka"
                  },
                  "city": "Minnesund",
                  "state": "Akershus",
                  "country": "Norway",
                  "postcode": 3716,
                  "coordinates": {
                      "latitude": "45.3438",
                      "longitude": "117.1316"
                  },
                  "timezone": {
                      "offset": "-1:00",
                      "description": "Azores, Cape Verde Islands"
                  }
              },
              "email": "emilija.borgen@example.com",
              "login": {
                  "uuid": "4196ae80-0815-4af8-9e54-8a51934d4b91",
                  "username": "brownlion705",
                  "password": "flyfish",
                  "salt": "HhuP9GM6",
                  "md5": "41b335fe0741474077a721966f87de71",
                  "sha1": "977afdff3cfbaf5a216298907d3ebc2ad7c08e4f",
                  "sha256": "f30be2609e2a9118a51624efb3f9375a91e37362a2cd308e1cc89ab8e889511e"
              },
              "dob": {
                  "date": "1964-11-30T00:17:02.134Z",
                  "age": 58
              },
              "registered": {
                  "date": "2003-11-18T09:46:04.292Z",
                  "age": 20
              },
              "phone": "32827602",
              "cell": "45863129",
              "id": {
                  "name": "FN",
                  "value": "30116416251"
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/women/59.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
              },
              "nat": "NO"
          }
      ],
      "info": {
          "seed": "8d79c65fe7933bba",
          "results": 1,
          "page": 1,
          "version": "1.4"
      }
  }
  },
};
