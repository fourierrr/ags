import Gtk from 'node_modules/@girs/gtk-3.0/gtk-3.0';
export declare function interval(interval: number, callback: () => void, bind?: Gtk.Widget): number;
export declare function timeout(ms: number, callback: () => void): number;
export declare function idle(callback: () => void, prio?: number): number;
