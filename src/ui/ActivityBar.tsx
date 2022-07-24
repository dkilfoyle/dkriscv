import { Icon, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import "./ActivityBar.css";
import classNames from "classnames";

export type ActivityBarProps = {
  checked: number;
  icons: IconType[];
  onClick: (index: number) => void;
};

export const ActivityBar = ({ checked, icons, onClick }: ActivityBarProps) => {
  return (
    <div className="activityBar">
      <VStack spacing={2} pt={2} style={{ alignItems: "start" }}>
        {icons.map((icon, index) => (
          <div className={classNames("actionItem", { checked: checked === index })} key={index}>
            <Icon
              className={classNames("actionLabel", { checked: checked === index })}
              as={icon}
              onClick={() => onClick(index)}
              w={6}
              h={6}></Icon>
          </div>
        ))}
      </VStack>
    </div>
  );
};
