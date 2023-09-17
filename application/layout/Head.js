import Head from "@/infrastructure/components/Head";
import { getTranslations } from "@/infrastructure/functions/translations";

export default function CustomHead() {
  const translations = getTranslations("head");

  return (
    <Head>
      <title>{translations("title")}</title>
      <meta name="keywords" content={translations("keywords")} />
      <meta name="description" content={translations("description")} />
      <meta name="author" content={translations("author")} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
    </Head>
  );
}
