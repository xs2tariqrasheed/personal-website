import Tag from "@/components/Tag";
import type { SkillGroup as SkillGroupType } from "@/lib/profile";
import styles from "./SkillGroup.module.css";

export default function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div className={styles.group}>
      <h3 className={styles.category}>{group.category}</h3>
      <div className={styles.items}>
        {group.items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  );
}
