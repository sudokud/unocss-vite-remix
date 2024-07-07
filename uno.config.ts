import { defineConfig, presetUno, presetWebFonts } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
export default defineConfig({
  theme: {
    colors: {
      cta: {
        primary: "#007AFF", //class="bg-cta-primary",
        content: "#f5f5f7",
        focus: "#0071e3",
      },
      card: {
        bg: "#1E1E1F",
      },
    },
  },
  shortcuts: {
    btn: "flex items-center justify-center w-auto h-10 px-4 py-2 text-sm font-semibold text-gray-900 transition-all bg-white rounded-full shrink-0 hover:bg-gray-800 hover:text-white",
    "btn-tertiary":
      "bg-cta-primary hover:bg-cta-focus min-w-7 flex items-center justify-center  px-5 py-3 text-sm font-normal text-cta-content transition-all rounded-full shrink-0",
    "btn-tertiary-sm":
      "bg-cta-primary hover:bg-cta-focus min-w-7 flex items-center justify-center px-3 py-1 text-xs font-normal text-cta-content transition-all rounded-full shrink-0",
    title1:
      "font-inter text-4xl font-bold tracking-tighter line-height-loose  text-neutral-800 lg:text-6xl",
  },
  presets: [
    presetUno(),
    presetAttributify({}),
    presetWebFonts({
      provider: "google",
      fonts: {
        inter: ["Inter", "Inter:400,700"],
        play: ["Playfair Display", "Playfair Display:400,700"],
      },
    }),
  ],
});
