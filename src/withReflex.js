
import React from 'react'
import cxs from 'cxs'
import classnames from 'classnames'
import ruled from 'ruled'
import config from './config'
import withUnderstyle from './withUnderstyle'

const bgGrid = ruled()

const withReflex = Comp => {
  const Base = withUnderstyle(Comp)

  class ReflexComponent extends React.Component {
    getBreakpoints = () => {
      const { breakpoints } = {
        ...config,
        ...this.context.reflexbox
      }
      return breakpoints
    }

    render () {
      const {
        debug,
        sm,
        md,
        lg,
        className,
        ...props
      } = this.props

      const breakpoints = this.getBreakpoints()
      const grid = debug || (this.context.reflex ? this.context.reflex.debug : false)

      const gcx = grid ? cxs({
        backgroundImage: bgGrid,
        backgroundSize: '8px 8px'
      }) : ''

      const isNum = n => typeof n === 'number' && !isNaN(n)

      const getWidth = n => isNum(n)
        ? n <= 1
          ? ({ width: (n * 100) + '%' })
          : ({ width: (n / 12 * 100) + '%' })
        : null

      const cx = classnames(className, gcx, cxs({
        [`@media screen and ${breakpoints.sm}`]: getWidth(sm),
        [`@media screen and ${breakpoints.md}`]: getWidth(md),
        [`@media screen and ${breakpoints.lg}`]: getWidth(lg)
      }))

      return (
        <Base
          {...props}
          className={cx} />
      )
    }
  }

  ReflexComponent.contextTypes = {
    reflexbox: React.PropTypes.shape({
      breakpoints: React.PropTypes.object,
      debug: React.PropTypes.bool
    })
  }

  ReflexComponent.propTypes = {
    flex: React.PropTypes.bool,
    wrap: React.PropTypes.bool,
    flexColumn: React.PropTypes.bool,
    column: React.PropTypes.bool,
    align: React.PropTypes.oneOf([
      'stretch',
      'center',
      'baseline',
      'flex-start',
      'flex-end'
    ]),
    justify: React.PropTypes.oneOf([
      'center',
      'space-around',
      'space-between',
      'flex-start',
      'flex-end'
    ]),
    flexAuto: React.PropTypes.bool,
    auto: React.PropTypes.bool,
    flexNone: React.PropTypes.bool,
    order: React.PropTypes.number,
    col: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number
  }

  return ReflexComponent
}

export default withReflex

