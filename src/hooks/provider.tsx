import { ComponentProps } from "@/@types";
import { InternationalizationProvider } from "./internationalization";


export default function AppProvider({ children }: ComponentProps) {
    return (
      <InternationalizationProvider>{children}</InternationalizationProvider>
    );
}