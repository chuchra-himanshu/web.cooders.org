interface LogoPropsInterface {
  classes?: string;
}

interface IconButtonPropsInterface {
  Icon: IconType;
  iconClassNames?: string;
  clickHandler?: () => void;
}

interface AvatarPropsInterface {
  userAvatarURL?: string;
  classes?: string;
  clickHandler?: () => void;
}
