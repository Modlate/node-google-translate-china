// Type definitions for node-google-translate-china v1.1.2
// Project: https://github.com/Modlate/node-google-translate-china
// Definitions by: Yesterday17 <https://github.com/Yesterday17>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = node_google_translate_china;

declare function node_google_translate_china(opts: node_google_translate_china.InputOption, callback: (result: string) => void): void;

declare namespace node_google_translate_china {
    export interface InputOption {
        text: string;
        source: string;
        target: string;
    }
}