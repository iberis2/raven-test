import SpriteIcon from '../../assets/sprite-icon.svg'

type IconNameType = 'eye' | 'eye-close' | 'calendar'

type IconProps = {
  name: IconNameType
  size?: number
}

function Icon({ name, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size}>
      <use href={`${SpriteIcon}#${name}`} />
    </svg>
  )
}

export default Icon
