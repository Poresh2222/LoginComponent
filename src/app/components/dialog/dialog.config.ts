export const DESKTOP_REGULAR = {
    width: '500px',
    height: '80vh',
}

export const FULL_DIALOG_CONFIG = {
    maxWidth: '100vw',
    maxHeight: '100vh',
    height: '100%',
    width: '100%',
}

export interface DialogConfig {
    maxWidth?: string,
    maxHeight?: string,
    height?: string,
    width?: string,
}