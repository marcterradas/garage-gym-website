import Image from "@/infrastructure/components/Image";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex items-center justify-center w-16 h-16 mt-5 ">
        <Image
          src="/img/logo.jpg"
          alt="avatar"
          fill
          style={{ objectFit: "contain" }}
          priority={true}
          sizes="h-16 w-16"
        ></Image>
      </div>
    </div>
  );
}
