import Tag from "@/components/Tag";
import type { SkillGroup as SkillGroupType } from "@/lib/profile";

export default function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div className="flex flex-col gap-[0.6rem]">
      <h3 className="font-mono text-[0.8rem] font-medium uppercase tracking-[0.08em] text-fg-muted">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-[0.4rem]">
        {group.items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  );
}
