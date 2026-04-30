import { MATERIALS } from "@/lib/materials";
import { MaterialCard } from "./material-card";

export function MaterialsGrid() {
  return (
    <section aria-label="Materiais do Hub de IA Industrial">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {MATERIALS.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </section>
  );
}
