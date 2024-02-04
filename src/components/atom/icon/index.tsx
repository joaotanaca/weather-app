import React, { useMemo } from "react";
import source from "./svg";
export type IconsName = keyof typeof source
export type IconProps = { size?: number; color?: string; className?: string };
const Icon = ({
    name,
    ...props
}: IconProps & { name: IconsName }) => {
    const IconSource = useMemo(() => source[name], [name]);
    return <IconSource {...props} />;
};

export default Icon;
