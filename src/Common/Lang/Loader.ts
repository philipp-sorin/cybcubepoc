export class Loader {
    public static readonly INSTANCE = new Loader();

    public importAll(context: any) {
        context.keys().forEach(context);
    }
}