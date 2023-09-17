import Image from "@/infrastructure/components/Image";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative flex items-center justify-center w-144 h-96">
        <Image
          src="/img/banner.jpg"
          alt="avatar"
          fill
          style={{ objectFit: "contain" }}
          priority={true}
          sizes="h-96 w-144"
        ></Image>
      </div>
    </div>
  );
}
