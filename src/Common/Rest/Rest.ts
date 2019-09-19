import {Singleton} from "../DI/Decorator/Singleton";

@Singleton
export class Rest {
    public fetchAsBase64(url: string): Promise<string> {
        return new Promise(async (r) => {
            const response = await fetch(url);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.onload = () => {
                r(reader.result!.toString());
            };
            reader.readAsDataURL(blob);
        })
    }
}