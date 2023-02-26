import type { BoxProps } from '@chakra-ui/react';
import { useColorModeValue, Heading, Link, Text, Stack, UnorderedList, ListItem } from '@chakra-ui/react';
import * as React from 'react';

import MotionBox from '~/lib/components/motion/MotionBox';
import { EVENT_TYPE_LINK } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/trackEvent';

const textProps: BoxProps = {
  marginY: 4,
};

const Content = () => {
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const handleClickInstagramLink = React.useCallback(() => {
    trackEvent({
      eventName: 'About: Click Instagram Link',
      eventData: { type: EVENT_TYPE_LINK },
    });
  }, []);

  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: 'spring' } },
        after: { opacity: 1, y: 0, transition: { type: 'spring' } },
      }}
      initial="before"
      animate="after"
    >
      <Heading size="lg">👋 Hi, how are you?</Heading>

      <Text {...{ ...textProps, textColor }}>
        I&apos;m Nathan, currently working as a Frontend Engineer. Most of the
        time I work with React - TypeScript and Flutter - Dart. Sometimes I make
        fun projects and share it here.
      </Text>

      <Text {...{ ...textProps, textColor }}>
        Outside working, I like to travel and{' '}
        <Link
          href="https://instagram.com/agustinusnathaniel"
          isExternal
          onClick={handleClickInstagramLink}
        >
          <Text as="span" fontWeight="extrabold">
            capture moments.
          </Text>
        </Link>
      </Text>
      
      <Heading size="lg">Technologies that I currently use</Heading>
      
      <Stack spacing={8} direction="row">
        <UnorderedList>
            <ListItem>
                <Text {...{ ...textProps, textColor }}>
                    PHP
                </Text>
            </ListItem>
        </UnorderedList>
      </Stack>
    </MotionBox>
  );
};

export default Content;
