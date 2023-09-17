import { router } from "@/infrastructure/functions/router";
import LanguageDropDown from "@/application/navbar/LanguageDropDown";
import Logo from "@/application/navbar/Logo";

export default function Navbar() {
  const { locale: selectedLanguageCode, locales: languagesCodes } = router();

  return (
    <nav className="flex items-center justify-between w-full h-16">
      <Logo />
      <LanguageDropDown
        selectedLanguageCode={selectedLanguageCode}
        languagesCodes={languagesCodes}
      />
    </nav>
  );
}
