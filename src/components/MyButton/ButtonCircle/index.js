import { Tooltip } from "antd"
import PropTypes from "prop-types"

import Button from "../Button"

export default function ButtonCircle(props) {
  const {
    title,
    iconName,
    enable = true,
    onClick,
    className,
    clsName,
    size,
    placement = "bottomRight",
    btnType = "btn-circle",
    fill,
    style,
    colorTooltip = "",
  } = props

  return (
    <Tooltip
      placement={placement}
      mouseLeaveDelay={0}
      title={title}
      overlayStyle={{ maxWidth: 500 }}
      color={colorTooltip}
    >
      <Button
        style={style}
        btnType={btnType}
        shape="circle"
        iconName={iconName}
        className={className}
        clsName={clsName}
        size={size}
        disabled={!enable}
        fill={fill}
        onClick={e => {
          e.stopPropagation()
          !!onClick && onClick()
        }}
      />
    </Tooltip>
  )
}
ButtonCircle.propTypes = {
  placement: PropTypes.string,
}

ButtonCircle.defaultProps = {
  placement: "bottom",
}
