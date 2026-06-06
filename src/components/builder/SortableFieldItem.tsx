import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: string;

  children: (dragHandleProps: any) => React.ReactNode;
}

export default function SortableFieldItem({ id, children }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children({
        ...attributes,
        ...listeners,
      })}
    </div>
  );
}
