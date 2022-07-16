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
      <VStack w={50} spacing={5} pt={5}>
        {icons.map((icon, index) => (
          <Icon
            key={index}
            className={classNames("actionItem", "actionLabel", { checked: checked === index })}
            as={icon}
            onClick={() => onClick(index)}
            w={8}
            h={8}></Icon>
        ))}
      </VStack>
    </div>
  );
};
