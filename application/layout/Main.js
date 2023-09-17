import Title from "@/application/main/Title";
import SubTitle from "@/application/main/SubTitle";
import Banner from "@/application/main/Banner";

export default function Main() {
  return (
    <main className="flex flex-wrap items-center justify-center mt-24">
      <Title />
      <SubTitle />
      <Banner />
    </main>
  );
}
