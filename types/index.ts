interface Message {
  code: number;
  success: boolean;
  message: string;
  data: any;
}

export interface SearchInputRefProps {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  value: string | undefined;
}
