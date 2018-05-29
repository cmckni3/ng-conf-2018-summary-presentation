// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Link,
  List,
  ListItem,
  Slide,
  Text,
} from 'spectacle';

import { YoutubeEmbed } from '../components/youtube-embed';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            ng-conf Summary
          </Heading>
          <Text padding={'1rem 0 0 0'}>
            <Link href="#/10" textColor="tertiary">
              <i className="fa fa-external-link-alt" />
              <span style={{ padding: '0 0.75rem' }}>Links</span>
            </Link>
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Day 1 Keynote - Brad Green, Miško Hevery, Kara Erickson
          </Heading>
          <YoutubeEmbed videoId={'dIxknqPOWms'} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Reactive Testing Strategies with NgRx - Brandon Roberts & Mike Ryan
          </Heading>
          <YoutubeEmbed videoId={'MTZprd9tI6c'} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Just Another Marble Monday – Unit Testing NGRX RxJS with Marbles - Sam Brennan & Keith
            Stewart
          </Heading>
          <YoutubeEmbed videoId={'dwDtMs4mN48'} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Good Action Hygiene with NgRx Mike Ryan
          </Heading>
          <YoutubeEmbed videoId={'JmnsEvoy-gY'} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            N Things You Didn’t Know About the Router - Deborah Kurata
          </Heading>
          <YoutubeEmbed videoId={'LaIAHOSKHCQ'} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Elements in v6 and Beyond - Rob Wormald
          </Heading>
          <YoutubeEmbed videoId={'Z1gLFPLVJjY'} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Super Powered, Server Rendered Progressive Native Apps - Nathan Walker, Jeff Whelpley
          </Heading>
          <YoutubeEmbed videoId={'EqqNexmu3Ug'} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Use the Custom Operator Force; Become an RxJS Jedi - Ryan Chenkie
          </Heading>
          <YoutubeEmbed videoId={'UaTLlcS9klU'} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            RXJS Observables in Angular - Ward Bell & Sander Ellis
          </Heading>
          <YoutubeEmbed videoId={'q--U25yPTrA'} />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Links
          </Heading>
          <List>
            <ListItem>
              <Link textSize={32} href="https://www.youtube.com/watch?v=dIxknqPOWms">
                Day 1 Keynote - Brad Green, Miško Hevery, Kara Erickson
              </Link>
            </ListItem>
            <ListItem>
              <Link textSize={32} href="https://www.youtube.com/watch?v=MTZprd9tI6c">
                Reactive Testing Strategies with NgRx - Brandon Roberts & Mike Ryan
              </Link>
            </ListItem>
            <ListItem>
              <Link textSize={32} href="https://www.youtube.com/watch?v=dwDtMs4mN48">
                Just Another Marble Monday – Unit Testing NGRX RxJS with Marbles - Sam Brennan &
                Keith Stewart
              </Link>
            </ListItem>
            <ListItem>
              <Link textSize={32} href="https://www.youtube.com/watch?v=JmnsEvoy-gY">
                Good Action Hygiene with NgRx Mike Ryan
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} caps>
            Links (continued)
          </Heading>
          <List>
            <ListItem>
              <Link textSize={32} href="https://www.youtube.com/watch?v=LaIAHOSKHCQ">
                N Things You Didn’t Know About the Router - Deborah Kurata
              </Link>
            </ListItem>
            <ListItem>
              <Link textSize={32} href="https://www.youtube.com/watch?v=Z1gLFPLVJjY">
                Elements in v6 and Beyond - Rob Wormald
              </Link>
            </ListItem>
            <ListItem>
              <Link textSize={32} href="https://www.youtube.com/watch?v=EqqNexmu3Ug">
                Super Powered, Server Rendered Progressive Native Apps - Nathan Walker, Jeff
                Whelpley
              </Link>
            </ListItem>
            <ListItem>
              <Link textSize={32} href="https://www.youtube.com/watch?v=UaTLlcS9klU">
                Use the Custom Operator Force; Become an RxJS Jedi - Ryan Chenkie
              </Link>
            </ListItem>
            <ListItem>
              <Link textSize={32} href="https://www.youtube.com/watch?v=q--U25yPTrA">
                RXJS Observables in Angular - Ward Bell & Sander Ellis
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} caps>
            Additional Resources
          </Heading>
          <Text textSize={32} margin="1rem 0 1rem 0">
            ConfSnap
            <Link padding="0 0 0 0.5rem" textColor="tertiary" href="http://confsnap.com/event/ng-conf-18">
              bit.ly/2LDpL6j
            </Link>
          </Text>
          <Text textSize={32} margin="0 0.5rem 1rem 0">
            <span>YouTube</span>
            <Link padding="0 0 0 0.5rem" textColor="tertiary" href="https://www.youtube.com/user/ngconfvideos">
              bit.ly/2IQoGKt
          </Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
