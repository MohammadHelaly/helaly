import { HackerRank, GitHub, Email, LinkedIn } from "@/assets/icons";
import Icon from "@/components/icon";

interface Props {
  variant?: "light" | "dark";
}

const SocialLinks = (props: Props) => {
  const { variant = "dark" } = props;

  const fillColor = variant === "light" ? "white" : "black";

  return (
    <div className="flex flex-row items-center justify-center gap-2 lg:gap-5">
      <Icon link="mailto:mohammad.helaly@outlook.com" name="Email">
        <Email
          height="38px"
          width="34px"
          className={`rounded-sm fill-${fillColor}`}
        />
      </Icon>
      <Icon link="https://github.com/MohammadHelaly" name="GitHub">
        <GitHub className={`size-8 rounded-sm fill-${fillColor}`} />
      </Icon>
      <Icon link="https://www.linkedin.com/in/mohammadhelaly" name="LinkedIn">
        <LinkedIn className={`size-8 rounded-sm fill-${fillColor}`} />
      </Icon>
      <Icon link="https://www.hackerrank.com/mohammad_helaly" name="HackerRank">
        <HackerRank className={`size-8 rounded-sm fill-${fillColor}`} />
      </Icon>
    </div>
  );
};

export default SocialLinks;
