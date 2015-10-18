
import React from 'react'
import { GithubButton, TweetButton } from 'blk'
import { Flex, Box } from '../../src'
import Travis from './Travis'
import CodeClimate from './CodeClimate'
import Npm from './Npm'
import Field from './Field'
import Rect from './Rect'

const Badges = () => (
  <Box px={3}>
    <Field p={3} color='pink'>
      <Flex
        align='center'
        justify='space-between'
        wrap
        gutter={2}>
        <Box p={2}>
          <Travis />
        </Box>
        <Box p={2}>
          <CodeClimate />
        </Box>
        <Box p={2}>
          <Npm />
        </Box>
        <Box p={2}>
          <GithubButton
            user='jxnblk'
            repo='reflexbox' />
        </Box>
        <Box p={2}>
          <TweetButton
            text='Reflexbox: React grid and layout system built with stateless components'
            url='http://jxnblk.com/reflexbox'
          />
        </Box>
      </Flex>
    </Field>
  </Box>
)

export default Badges
