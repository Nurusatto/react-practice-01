import { FooterCard } from "@components/UiComponents/FooterCard/FooterCard";
import { ListBlock } from "@components/UiComponents/ListBlock/ListBlock";
import { FooterInfo } from "@components/mocks/FooterInfo";

export const ListBlockFooter = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Помогаем строить удаленные отделы</h2>
      </div>
      <ListBlock
        data={FooterInfo}
        layout="GridFooter"
        renderItem={(item) => <FooterCard key={item.id} {...item} />}
      />
    </>
  );
};
