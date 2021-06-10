import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './Icon.module.scss';

interface IIcon {
  name: string;
  className?: string;
}

const Icon: React.FC<IIcon> = ({ name, className, ...otherProps }) => {
  const [iconModule, setIconModule] = useState<any>(null);

  useEffect(() => {
    import(`@svgr/webpack?-svgo,+titleProp,+ref!../../assets/icons/${name}.svg`)
      .then((module) => {
        setIconModule(module);
      })
      .catch((error) => {
        console.error(`Icon with name: ${name} not found!`);
      });
  }, [name]);

  const renderIcon = () => {
    if (!iconModule) return null;

    const Component = iconModule.ReactComponent;

    return <Component className={classnames(styles.iconSvg, className)} {...otherProps} />;
  };

  return <>{renderIcon()}</>;
};
export default Icon;
