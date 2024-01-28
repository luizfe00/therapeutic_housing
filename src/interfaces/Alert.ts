export interface AlertState {
  open: boolean;
  severity: 'info' | 'success' | 'error' | 'warning' | undefined;
  message: string;
}
