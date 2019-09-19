import {debounceFn} from "debounce-decorator-ts";

export function Debounce(time: number) {
    return debounceFn(time);
}