
import React from 'react'
import { createUnderstyle } from 'understyle'
import cxs from 'cxs'
import assign from 'object-assign'
import classnames from 'classnames'
import config from './config'


const withUnderstyle = Comp => {
  class UnderstyleComponent extends React.Component {
    render () {
      // const { config } = this.context
      const {
        p, pt, pr, pb, pl, px, py,
        m, mt, mr, mb, ml, mx, my,
        gutter,
        col,
        block,
        inlineBlock,
        inline,
        table,
        tableRow,
        tableCell,
        flex,
        inlineFlex,
        wrap,
        flexColumn,
        align,
        justify,
        flexAuto,
        flexNone,
        order,
        className,
        ...props
      } = this.props

      const _style = createUnderstyle(config)

      const styleProps = {
        p, pt, pr, pb, pl, px, py,
        m, mt, mr, mb, ml, mx, my,
        gutter,
        col,
        block,
        inlineBlock,
        inline,
        table,
        tableRow,
        tableCell,
        flex,
        inlineFlex,
        wrap,
        flexColumn,
        align,
        justify,
        flexAuto,
        flexNone,
        order
      }

      const cx = classnames(className, cxs(assign({
        boxSizing: 'border-box'
      }, _style(styleProps))))

      return (
        <Comp
          {...props}
          className={cx}
        />
      )
    }
  }

  UnderstyleComponent.contextTypes = {
    config: React.PropTypes.shape({
      scale: React.PropTypes.arrayOf(React.PropTypes.number),
      columns: React.PropTypes.number
    })
  }

  const spaceScale = [
    -6, -5, -4, -3, -2, -1,
    0, 1, 2, 3, 4, 5, 6
  ]

  UnderstyleComponent.propTypes = {
    m: React.PropTypes.oneOf(spaceScale),
    mt: React.PropTypes.oneOf(spaceScale),
    mr: React.PropTypes.oneOf(spaceScale),
    mb: React.PropTypes.oneOf(spaceScale),
    ml: React.PropTypes.oneOf(spaceScale),
    mx: React.PropTypes.oneOf(spaceScale),
    my: React.PropTypes.oneOf(spaceScale),
    gutter: React.PropTypes.oneOf(spaceScale),
    p: React.PropTypes.oneOf(spaceScale),
    pt: React.PropTypes.oneOf(spaceScale),
    pr: React.PropTypes.oneOf(spaceScale),
    pb: React.PropTypes.oneOf(spaceScale),
    pl: React.PropTypes.oneOf(spaceScale),
    px: React.PropTypes.oneOf(spaceScale),
    py: React.PropTypes.oneOf(spaceScale),
    col: React.PropTypes.number,
    block: React.PropTypes.bool,
    inlineBlock: React.PropTypes.bool,
    inline: React.PropTypes.bool,
    table: React.PropTypes.bool,
    tableRow: React.PropTypes.bool,
    tableCell: React.PropTypes.bool,
    flex: React.PropTypes.bool,
    inlineFlex: React.PropTypes.bool,
    wrap: React.PropTypes.bool,
    flexColumn: React.PropTypes.bool,
    align: React.PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'baseline',
      'center',
      'stretch'
    ]),
    justify: React.PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'space-between',
      'space-around',
      'center'
    ]),
    flexAuto: React.PropTypes.bool,
    flexNone: React.PropTypes.bool,
    order: React.PropTypes.number
  }

  return UnderstyleComponent
}

export default withUnderstyle

