/// <reference types="gjs" />
import Gtk from 'node_modules/@girs/gtk-3.0/gtk-3.0';
import Gio from 'node_modules/@girs/gio-2.0/gio-2.0';
export declare function execAsync(cmd: string | string[]): Promise<string>;
export declare function exec(cmd: string): string;
export declare function subprocess(cmd: string | string[], callback: (out: string) => void, onError?: typeof logError, bind?: Gtk.Widget): Gio.Subprocess | null;
