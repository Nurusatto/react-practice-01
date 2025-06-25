import { ListBlock } from "@components/UiComponents/ListBlock/ListBlock";
import { VacansiCard } from "@components/UiComponents/VacansiCard/VacansiCard";
import { vacansi } from "@components/mocks/vacansi";

export const ListBlockVacansi = () => {
  return (
    <ListBlock
      data={vacansi}
      renderItem={(item) => <VacansiCard {...item} />}
    />
  );
};
