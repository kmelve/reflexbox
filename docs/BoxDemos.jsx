
import React from 'react'
import { Flex, Box } from '../src'
import Data from './Data'

const BoxDemos = ({ data, ...props }) => (
  <Box>
    <h2>Box component</h2>
    {/* <Data {...data} />
      */}
    <Box py={3}>
      <h3>Padded Box</h3>
      <p>The Box component adds padding with the p, px, py, pt, pr, pb, and pl props.</p>
      <Flex sm align='center' justify='space-between'>
        <Box p={1}>Box p=1</Box>
        <Box px={1}>Box px=1</Box>
        <Box py={1}>Box py=1</Box>
        <Box pt={1}>Box pt=1</Box>
        <Box pb={1}>Box pb=1</Box>
        <Box pl={1}>Box pl=1</Box>
        <Box pr={1}>Box pr=1</Box>
      </Flex>
      <Flex sm align='center' justify='space-between'>
        <Box p={2}>Box p=2</Box>
        <Box px={2}>Box px=2</Box>
        <Box py={2}>Box py=2</Box>
        <Box pt={2}>Box pt=2</Box>
        <Box pb={2}>Box pb=2</Box>
        <Box pl={2}>Box pl=2</Box>
        <Box pr={2}>Box pr=2</Box>
      </Flex>
      <Flex sm align='center' justify='space-between'>
        <Box p={3}>Box p=3</Box>
        <Box px={3}>Box px=3</Box>
        <Box py={3}>Box py=3</Box>
        <Box pt={3}>Box pt=3</Box>
        <Box pb={3}>Box pb=3</Box>
        <Box pl={3}>Box pl=3</Box>
        <Box pr={3}>Box pr=3</Box>
      </Flex>
      <Flex sm align='center' justify='space-between'>
        <Box p={4}>Box p=4</Box>
        <Box px={4}>Box px=4</Box>
        <Box py={4}>Box py=4</Box>
        <Box pt={4}>Box pt=4</Box>
        <Box pb={4}>Box pb=4</Box>
        <Box pl={4}>Box pl=4</Box>
        <Box pr={4}>Box pr=4</Box>
      </Flex>
    </Box>
    <Box py={3}>
      <h3>Filled Box</h3>
      <p>Use the fill prop to make a box expand to fill its parent Flex component</p>
      <Flex sm align='center' justify='space-between'>
        <Box p={2} fill>Box p=2 fill</Box>
        <Box p={2}>Box p=2</Box>
      </Flex>
    </Box>
    <Box py={3}>
      <h3>Column Box</h3>
      <p>Use the col prop to set a width</p>
      {Array.from({ length: 6 }, (a, b) => b + 1).map((n, i) => {
        if (12 % n) { return false }
        const boxes = Array.from({ length: Math.floor(12/n) }, (a, b) => b)
        return (
          <Flex key={i} align='center' justify='center'>
            {boxes.map((box, j) => (
              <Box col={n} key={j} p={2}>Box col={n}</Box>
            ))}
          </Flex>
        )
      }).reverse()}
    </Box>
    <Box py={3}>
      <h3>Small Breakpoint Column Box</h3>
      <p>Use the sm prop to set a width above the small breakpoint</p>
      {Array.from({ length: 6 }, (a, b) => b + 1).map((n, i) => {
        if (12 % n) { return false }
        const boxes = Array.from({ length: Math.floor(12/n) }, (a, b) => b)
        return (
          <Flex key={i} sm align='center' justify='center'>
            {boxes.map((box, j) => (
              <Box sm={n} key={j} p={2}>Box sm={n}</Box>
            ))}
          </Flex>
        )
      }).reverse()}
    </Box>
    <Box py={3}>
      <h3>Medium Breakpoint Column Box</h3>
      <p>Use the md prop to set a width above the medium breakpoint</p>
      {Array.from({ length: 6 }, (a, b) => b + 1).map((n, i) => {
        if (12 % n) { return false }
        const boxes = Array.from({ length: Math.floor(12/n) }, (a, b) => b)
        return (
          <Flex key={i} md align='center' justify='center'>
            {boxes.map((box, j) => (
              <Box md={n} key={j} p={2}>Box md={n}</Box>
            ))}
          </Flex>
        )
      }).reverse()}
    </Box>
    <Box py={3}>
      <h3>Large Breakpoint Column Box</h3>
      <p>Use the lg prop to set a width above the large breakpoint</p>
      {Array.from({ length: 6 }, (a, b) => b + 1).map((n, i) => {
        if (12 % n) { return false }
        const boxes = Array.from({ length: Math.floor(12/n) }, (a, b) => b)
        return (
          <Flex key={i} lg align='center' justify='center'>
            {boxes.map((box, j) => (
              <Box lg={n} key={j} p={2}>Box lg={n}</Box>
            ))}
          </Flex>
        )
      }).reverse()}
    </Box>
  </Box>
)

export default BoxDemos

