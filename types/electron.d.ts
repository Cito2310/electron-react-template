import ipc from "./ipcNames";

declare global {
    interface Window {
        electronAPI: {
            basicOnIpc: ( value: string ) => unknown,
            basicHandleIpc: ( value: string ) => unknown,
        }
    }
}