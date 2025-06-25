import { brends } from "@components/mocks/brends";
import { BreandCard } from "@components/UiComponents/BrendCard/BrendCard";
import { ListBlock } from "@components/UiComponents/ListBlock/ListBlock";

export const ListBlockMain = () => {
  return (
    <ListBlock
      data={brends}
      layout="row"
      renderItem={(item) => <BreandCard {...item} />}
    />
  );
};
