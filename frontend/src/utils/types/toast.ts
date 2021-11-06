export type Toast = {
  id: string;
  title?: string;
  value: string;
  type?: Type;
}

export type Type = 
    | 'success'
    | 'warning'
    | 'danger'
    | 'error'
    | 'info'
    | 'link'
    | 'primary'
    | 'gray'
    | 'dark';
