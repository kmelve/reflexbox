
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

      // const width = getWidth(this.props)(matches)

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

  /*
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
    col: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    sm: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    md: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    lg: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    is: (props, propName, componentName) => {
      if (props[propName]) {
        return new Error(
          'Warning! Deprecated prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Use the Reflex higher order component instead. https://github.com/jxnblk/reflexbox/'
        )
      }
    }
  }
  */

  return ReflexComponent
}

export default withReflex

